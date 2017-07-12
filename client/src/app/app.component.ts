import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/dom/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$: Subject<any> = new Subject();
  private ws$: Subject<any>;
  private wsSessionId: string;
  private wsUrl: string = environment.wsUrl;
  @ViewChild('chatMsgs') private chatScrollContainer: ElementRef;

  userMsg: string = '';
  msgs: Array<Object> = [];
  botIsTyping: boolean = false;

  ngOnInit() {
    //
    // The websocket Observable
    this.ws$ = Observable.webSocket(this.wsUrl);

    //
    // Get the sessionId on connecting to the WS:
    //  we need to do this only once, and we are only
    //  concerned aboout the messages containing the sessionId
    this.ws$.filter(r => r.type === 'sessionId')
      .takeUntil(this.ngUnsubscribe$).take(1)
      .subscribe(r => this.wsSessionId = r.msg);

    //
    // Get responses from the bot, and show them
    //  (attempt to reconnect on connection fail, retry 3 times)
    this.ws$.takeUntil(this.ngUnsubscribe$)
      .filter(r => r.type === 'bot')
      .retryWhen(err$ =>
        Observable.zip(err$, Observable.range(1, 3), (e, n) => n)
          // .do(n => console.log('retrying ' + n))
          .mergeMap(retryCount => Observable.timer(1000 * retryCount))
      )
      .subscribe(
        (msg) => this.pushMsg(msg),
        (err) => console.log(err),
        () => console.log('complete')
      );
  }

  onSubmit() {
    const input = { type: 'user', sessionId: this.wsSessionId, msg: this.userMsg };
    this.ws$.next(JSON.stringify(input));
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
         this.chatScrollContainer.nativeElement.scrollTop = this.chatScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
    }, 0);
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
