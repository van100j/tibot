webpackJsonp([2,5],{

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 196;


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(56);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delayWhen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delayWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delayWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_zip__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_range__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_timer__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_dom_webSocket__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_dom_webSocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_dom_webSocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment_timezone__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_moment_timezone__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppComponent = (function () {
    function AppComponent(bodyEl) {
        this.bodyEl = bodyEl;
        this.ngUnsubscribe$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.wsUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].wsUrl;
        this.timezone = __WEBPACK_IMPORTED_MODULE_15_moment__["tz"].guess();
        this.userMsg = '';
        this.msgs = [];
        this.botIsTyping = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //
        // The WebSocket Observable
        this.ws$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].webSocket(this.wsUrl);
        //
        // Get the sessionId on connecting to the WS:
        //  we need to do this only once, and we are only
        //  concerned aboout the messages containing the sessionId
        this.ws$.filter(function (r) { return r.type === 'sessionId'; })
            .takeUntil(this.ngUnsubscribe$).take(1)
            .subscribe(function (r) { return _this.wsSessionId = r.msg; });
        //
        // Get responses from the bot, and show them
        //  (attempt to reconnect on connection fail, retry 3 times)
        this.ws$.takeUntil(this.ngUnsubscribe$)
            .filter(function (r) { return r.type === 'bot'; })
            .retryWhen(function (err$) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].zip(err$, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].range(1, 10), function (e, n) { return n; })
                .mergeMap(function (retryCount) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(1000 * retryCount); });
        })
            .delayWhen(function (input) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].interval(100 + input.msg.length * 10); })
            .subscribe(function (msg) { return _this.pushMsg(msg); });
    };
    AppComponent.prototype.onSubmit = function () {
        var input = {
            type: 'user',
            sessionId: this.wsSessionId,
            msg: this.userMsg,
            tz: this.timezone
        };
        this.ws$.next(JSON.stringify(input));
        this.pushMsg(input, true);
        this.botIsTyping = true;
    };
    AppComponent.prototype.pushMsg = function (msg, clearUserMsg) {
        if (clearUserMsg === void 0) { clearUserMsg = false; }
        this.msgs.push(msg);
        this.botIsTyping = false;
        this.scrollChatToBottom();
        this.userMsg = clearUserMsg ? '' : this.userMsg;
    };
    AppComponent.prototype.scrollChatToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.bodyEl.nativeElement.scrollTop = _this.bodyEl.nativeElement.scrollHeight;
            }
            catch (err) { }
        }, 0);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('chatMsgs'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "chatScrollContainer", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'body',
        template: __webpack_require__(272)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 68,
	"./af.js": 68,
	"./ar": 75,
	"./ar-dz": 69,
	"./ar-dz.js": 69,
	"./ar-kw": 70,
	"./ar-kw.js": 70,
	"./ar-ly": 71,
	"./ar-ly.js": 71,
	"./ar-ma": 72,
	"./ar-ma.js": 72,
	"./ar-sa": 73,
	"./ar-sa.js": 73,
	"./ar-tn": 74,
	"./ar-tn.js": 74,
	"./ar.js": 75,
	"./az": 76,
	"./az.js": 76,
	"./be": 77,
	"./be.js": 77,
	"./bg": 78,
	"./bg.js": 78,
	"./bn": 79,
	"./bn.js": 79,
	"./bo": 80,
	"./bo.js": 80,
	"./br": 81,
	"./br.js": 81,
	"./bs": 82,
	"./bs.js": 82,
	"./ca": 83,
	"./ca.js": 83,
	"./cs": 84,
	"./cs.js": 84,
	"./cv": 85,
	"./cv.js": 85,
	"./cy": 86,
	"./cy.js": 86,
	"./da": 87,
	"./da.js": 87,
	"./de": 90,
	"./de-at": 88,
	"./de-at.js": 88,
	"./de-ch": 89,
	"./de-ch.js": 89,
	"./de.js": 90,
	"./dv": 91,
	"./dv.js": 91,
	"./el": 92,
	"./el.js": 92,
	"./en-au": 93,
	"./en-au.js": 93,
	"./en-ca": 94,
	"./en-ca.js": 94,
	"./en-gb": 95,
	"./en-gb.js": 95,
	"./en-ie": 96,
	"./en-ie.js": 96,
	"./en-nz": 97,
	"./en-nz.js": 97,
	"./eo": 98,
	"./eo.js": 98,
	"./es": 100,
	"./es-do": 99,
	"./es-do.js": 99,
	"./es.js": 100,
	"./et": 101,
	"./et.js": 101,
	"./eu": 102,
	"./eu.js": 102,
	"./fa": 103,
	"./fa.js": 103,
	"./fi": 104,
	"./fi.js": 104,
	"./fo": 105,
	"./fo.js": 105,
	"./fr": 108,
	"./fr-ca": 106,
	"./fr-ca.js": 106,
	"./fr-ch": 107,
	"./fr-ch.js": 107,
	"./fr.js": 108,
	"./fy": 109,
	"./fy.js": 109,
	"./gd": 110,
	"./gd.js": 110,
	"./gl": 111,
	"./gl.js": 111,
	"./gom-latn": 112,
	"./gom-latn.js": 112,
	"./he": 113,
	"./he.js": 113,
	"./hi": 114,
	"./hi.js": 114,
	"./hr": 115,
	"./hr.js": 115,
	"./hu": 116,
	"./hu.js": 116,
	"./hy-am": 117,
	"./hy-am.js": 117,
	"./id": 118,
	"./id.js": 118,
	"./is": 119,
	"./is.js": 119,
	"./it": 120,
	"./it.js": 120,
	"./ja": 121,
	"./ja.js": 121,
	"./jv": 122,
	"./jv.js": 122,
	"./ka": 123,
	"./ka.js": 123,
	"./kk": 124,
	"./kk.js": 124,
	"./km": 125,
	"./km.js": 125,
	"./kn": 126,
	"./kn.js": 126,
	"./ko": 127,
	"./ko.js": 127,
	"./ky": 128,
	"./ky.js": 128,
	"./lb": 129,
	"./lb.js": 129,
	"./lo": 130,
	"./lo.js": 130,
	"./lt": 131,
	"./lt.js": 131,
	"./lv": 132,
	"./lv.js": 132,
	"./me": 133,
	"./me.js": 133,
	"./mi": 134,
	"./mi.js": 134,
	"./mk": 135,
	"./mk.js": 135,
	"./ml": 136,
	"./ml.js": 136,
	"./mr": 137,
	"./mr.js": 137,
	"./ms": 139,
	"./ms-my": 138,
	"./ms-my.js": 138,
	"./ms.js": 139,
	"./my": 140,
	"./my.js": 140,
	"./nb": 141,
	"./nb.js": 141,
	"./ne": 142,
	"./ne.js": 142,
	"./nl": 144,
	"./nl-be": 143,
	"./nl-be.js": 143,
	"./nl.js": 144,
	"./nn": 145,
	"./nn.js": 145,
	"./pa-in": 146,
	"./pa-in.js": 146,
	"./pl": 147,
	"./pl.js": 147,
	"./pt": 149,
	"./pt-br": 148,
	"./pt-br.js": 148,
	"./pt.js": 149,
	"./ro": 150,
	"./ro.js": 150,
	"./ru": 151,
	"./ru.js": 151,
	"./sd": 152,
	"./sd.js": 152,
	"./se": 153,
	"./se.js": 153,
	"./si": 154,
	"./si.js": 154,
	"./sk": 155,
	"./sk.js": 155,
	"./sl": 156,
	"./sl.js": 156,
	"./sq": 157,
	"./sq.js": 157,
	"./sr": 159,
	"./sr-cyrl": 158,
	"./sr-cyrl.js": 158,
	"./sr.js": 159,
	"./ss": 160,
	"./ss.js": 160,
	"./sv": 161,
	"./sv.js": 161,
	"./sw": 162,
	"./sw.js": 162,
	"./ta": 163,
	"./ta.js": 163,
	"./te": 164,
	"./te.js": 164,
	"./tet": 165,
	"./tet.js": 165,
	"./th": 166,
	"./th.js": 166,
	"./tl-ph": 167,
	"./tl-ph.js": 167,
	"./tlh": 168,
	"./tlh.js": 168,
	"./tr": 169,
	"./tr.js": 169,
	"./tzl": 170,
	"./tzl.js": 170,
	"./tzm": 172,
	"./tzm-latn": 171,
	"./tzm-latn.js": 171,
	"./tzm.js": 172,
	"./uk": 173,
	"./uk.js": 173,
	"./ur": 174,
	"./ur.js": 174,
	"./uz": 176,
	"./uz-latn": 175,
	"./uz-latn.js": 175,
	"./uz.js": 176,
	"./vi": 177,
	"./vi.js": 177,
	"./x-pseudo": 178,
	"./x-pseudo.js": 178,
	"./yo": 179,
	"./yo.js": 179,
	"./zh-cn": 180,
	"./zh-cn.js": 180,
	"./zh-hk": 181,
	"./zh-hk.js": 181,
	"./zh-tw": 182,
	"./zh-tw.js": 182
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 269;


/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<ul class=\"msgs\" #chatMsgs>\n  <li class=\"bot\">\n    ⏰  Hello there, TiBot here. Ask me something about date and time!\n  </li>\n  <li\n    *ngFor=\"let input of msgs\"\n    [ngClass]=\"{'user': input.type === 'user', 'bot': input.type === 'bot'}\"\n  >{{ input.msg }}</li>\n  <li class=\"bot\" *ngIf=\"botIsTyping\">\n    <span>.</span>\n    <span>.</span>\n    <span>.</span>\n  </li>\n</ul>\n\n<div class=\"chat-input\">\n  <form (submit)=\"onSubmit()\">\n    <input [(ngModel)]=\"userMsg\" name=\"userMsg\" class=\"chat-input-text\" type=\"text\" placeholder=\"Ask something...\">\n  </form>\n</div>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(197);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    wsUrl: 'wss://ti-bot.herokuapp.com/'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.bundle.js.map