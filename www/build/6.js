webpackJsonp([6],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalyoutubePageModule", function() { return ModalyoutubePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalyoutube__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalyoutubePageModule = /** @class */ (function () {
    function ModalyoutubePageModule() {
    }
    ModalyoutubePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modalyoutube__["a" /* ModalyoutubePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modalyoutube__["a" /* ModalyoutubePage */]),
            ],
        })
    ], ModalyoutubePageModule);
    return ModalyoutubePageModule;
}());

//# sourceMappingURL=modalyoutube.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalyoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalyoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalyoutubePage = /** @class */ (function () {
    function ModalyoutubePage(navCtrl, navParams, loadingController, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.domSanitizer = domSanitizer;
        this.video = {
            url: '',
            title: 'Awesome video'
        };
        this.loading = this.loadingController.create({
            content: 'Por favor espere...'
        });
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }
    ModalyoutubePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalyoutubePage');
    };
    ModalyoutubePage.prototype.ionViewWillEnter = function () {
        this.loading.present();
    };
    ModalyoutubePage.prototype.handleIFrameLoadEvent = function () {
        this.loading.dismiss();
    };
    ModalyoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalyoutube',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\modalyoutube\modalyoutube.html"*/'<!--\n  Generated template for the ModalyoutubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<div style="width: 100%; height: 100%; margin-top: 0%;" class="sample-modal-page">\n  <iframe style="margin-top: 35%" width="100%" height="315" [src]="trustedVideoUrl ? trustedVideoUrl : null" (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n    frameborder="0" allowfullscreen SAMEORIGIN></iframe>\n</div>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\modalyoutube\modalyoutube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ModalyoutubePage);
    return ModalyoutubePage;
}());

//# sourceMappingURL=modalyoutube.js.map

/***/ })

});
//# sourceMappingURL=6.js.map