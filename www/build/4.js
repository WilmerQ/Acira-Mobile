webpackJsonp([4],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_conexion__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(366);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(viewCtrl, navParams, navCtrl, localstorage, actionSheetCtrl, alertCtrl, socialSharing) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.localstorage = localstorage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.registroPage = "RegistroPage";
        this.tipoPopover = navParams.get("tipo");
        if (this.tipoPopover == "mapa") {
            var temp = localstorage.getObject("rutadirecta");
            if (temp.indexOf("true") >= 0) {
                this.rutaDirecta = true;
            }
            else {
                this.rutaDirecta = false;
            }
            temp = localstorage.getObject("rutaauto");
            if (temp.indexOf("true") >= 0) {
                this.rutaVehicular = true;
            }
            else {
                this.rutaVehicular = false;
            }
        }
    }
    PopoverPage.prototype.ionViewWillLeave = function () {
        //console.log("ionViewWillLeave popover");
        if (this.tipoPopover == "mapa") {
            this.localstorage.guardarObjeto("rutadirecta", this.rutaDirecta);
            this.localstorage.guardarObjeto("rutaauto", this.rutaVehicular);
        }
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.shareApp = function () {
        this.presentActionSheet();
        this.close();
    };
    PopoverPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            title: 'Compartir via',
            buttons: [
                {
                    icon: "logo-whatsapp",
                    text: 'Whatsapp',
                    handler: function () {
                        _this.socialSharing.shareViaWhatsApp("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram", "www/assets/img/imagenTocompartir.png", "https://goo.gl/tpCRfZ");
                    }
                },
                {
                    icon: "logo-facebook",
                    text: 'Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebookWithPasteMessageHint("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram. https://goo.gl/tpCRfZ", "www/assets/img/imagenTocompartir.png", null, "Si lo desea, puede pegar un mensaje desde su portapapeles");
                    }
                },
                {
                    icon: "logo-twitter",
                    text: 'Twitter',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram.", "www/assets/img/imagenTocompartir.png", "https://goo.gl/tpCRfZ");
                    }
                },
                {
                    icon: "logo-instagram",
                    text: 'Instagram',
                    handler: function () {
                        _this.socialSharing.shareViaInstagram("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram. https://goo.gl/tpCRfZ", null);
                    }
                },
                {
                    icon: "close",
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    PopoverPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Calificar la aplicación',
            message: 'Califícanos, tu opinión nos hace mejorar cada día',
            buttons: [
                {
                    text: 'NO',
                    handler: function () {
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        window.open("https://play.google.com/store/apps/details?id=co.acira", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
        this.close();
    };
    PopoverPage.prototype.pagfacebook = function () {
        window.open("https://www.facebook.com/acira.sas.7", '_system', 'location=yes');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.terminos = function () {
        var con = new __WEBPACK_IMPORTED_MODULE_0__models_conexion__["a" /* conexion */]();
        window.open("http://" + con.ip + ":" + con.port + "/Acira/terminos.xhtml", '_system', 'location=yes');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\popover\popover.html"*/'<ion-list *ngIf="tipoPopover == \'mapa\'">\n  <ion-list-header>\n    <ion-icon name="ios-options"></ion-icon>\n    Configuraciones\n  </ion-list-header>\n  <ion-item>\n    <ion-label>\n      <ion-icon name="ios-walk-outline"></ion-icon>\n      Ruta linea recta\n    </ion-label>\n    <ion-toggle [(ngModel)]="rutaDirecta"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <ion-icon name="ios-car"></ion-icon>\n      Ruta en automóvil\n    </ion-label>\n    <ion-toggle [(ngModel)]="rutaVehicular"></ion-toggle>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf="tipoPopover == \'general\'">\n  <ion-list-header padding-left padding-top>\n    <ion-icon name="ios-options"></ion-icon>\n    Opciones\n  </ion-list-header>\n  <button ion-item (click)="this.viewCtrl.dismiss()" [navPush]=\'"RegistroPage"\' [navParams]="{actualizar: true}">\n    <ion-icon name="ios-person"></ion-icon>\n    Mi Perfil\n  </button>\n  <button ion-item (click)="shareApp()">\n    <ion-icon name="share"></ion-icon>\n    Compartir\n  </button>\n  <button ion-item (click)="showConfirm()">\n    <ion-icon name="ios-star"></ion-icon>\n    Calificar app\n  </button>\n  <button ion-item (click)="pagfacebook()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Pag. Facebook\n  </button>\n  <button ion-item (click)="terminos()">\n    <ion-icon name="md-clipboard"></ion-icon>\n    términos y condiciones\n  </button>\n  <button ion-item (click)="this.viewCtrl.dismiss(\'cerrarSesion\')">\n    <ion-icon name="md-log-out"></ion-icon>\n    Cerrar sesión</button>\n</ion-list>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ })

});
//# sourceMappingURL=4.js.map