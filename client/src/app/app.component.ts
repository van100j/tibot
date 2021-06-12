import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../environments/environment';
import { Subject, interval } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { retryBackoff } from 'backoff-rxjs';
import { takeUntil, take, filter, delayWhen } from 'rxjs/operators';

import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$: Subject<any> = new Subject();
  private ws$: Subject<any>;
  private wsSessionId: string;
  private wsUrl: string = environment.wsUrl;
  private timezone: string = moment.tz.guess();
  @ViewChild('chatMsgs') private chatScrollContainer: ElementRef;

  userMsg = '';
  msgs: Array<Object> = [];
  botIsTyping = false;

  constructor(private bodyEl: ElementRef) { }

  ngOnInit() {
    //
    // The WebSocket Observable
    this.ws$ = webSocket(this.wsUrl);

    //
    // Get the sessionId on connecting to the WS:
    //  we need to do this only once, and we are only
    //  concerned aboout the messages containing the sessionId
    this.ws$.pipe(
      filter(r => r.type === 'sessionId'),
      takeUntil(this.ngUnsubscribe$),
      take(1)
    )
      .subscribe(r => this.wsSessionId = r.msg);

    //
    // Get responses from the bot, and show them
    //  (attempt to reconnect if connection fails or breaks)
    this.ws$.pipe(
      retryBackoff({
        initialInterval: 100,
        maxRetries: 10,
        maxInterval: 1500,
        resetOnSuccess: true
      }),
      takeUntil(this.ngUnsubscribe$),
      filter(r => r.type === 'bot'),
      delayWhen(input => interval(100 + input.msg.length * 10))
    )
      .subscribe(msg => this.pushMsg(msg));

  }

  onSubmit() {
    const input = {
      type: 'user',
      sessionId: this.wsSessionId,
      msg: this.userMsg,
      tz: this.timezone
    };

    this.ws$.next(input);
    this.pushMsg(input, true);
    this.botIsTyping = true;
  }

  private pushMsg(msg: Object, clearUserMsg: boolean = false) {
    this.msgs.push(msg);
    this.botIsTyping = false;
    this.scrollChatToBottom();
    this.userMsg = clearUserMsg ? '' : this.userMsg;
  }

  private scrollChatToBottom() {
    setTimeout(() => {
      try {
        window.scrollTo(0, document.body.scrollHeight);
      } catch (err) { }
    }, 100);
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next('');
    this.ngUnsubscribe$.complete();
  }
}
