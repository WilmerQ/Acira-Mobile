webpackJsonp([2],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usuarioRegistro; });
var usuarioRegistro = /** @class */ (function () {
    function usuarioRegistro(nombrecompleto, identificacion, celular, email, nombreusuario, contrasena, codigofamiliar, idSesion, uuidDoc) {
        this.nombrecompleto = nombrecompleto;
        this.identificacion = identificacion;
        this.celular = celular;
        this.email = email;
        this.nombreusuario = nombreusuario;
        this.contrasena = contrasena;
        this.codigofamiliar = codigofamiliar;
        this.idSesion = idSesion;
        this.uuidDocumento = uuidDoc;
    }
    return usuarioRegistro;
}());

//# sourceMappingURL=usuarioRegistro.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_usuarioRegistro__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_operaciones_http_operaciones_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_usuario__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_raven_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { Autostart } from '@ionic-native/autostart';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, operacionesLogin, localStorage, loadingController, toastCtl, androidPermissions, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.operacionesLogin = operacionesLogin;
        this.localStorage = localStorage;
        this.loadingController = loadingController;
        this.toastCtl = toastCtl;
        this.androidPermissions = androidPermissions;
        this.fb = fb;
        this.desactivarElementos = false;
        this.paginaRegistro = 'RegistroPage';
        this.myForm = this.fb.group({
            nombreusuario: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{3,16}$/)]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/)]]
        });
    }
    LoginPage.prototype.ionViewCanEnter = function () {
        var idDispositivo = this.localStorage.getObject("idDispositivo");
        if (idDispositivo == null) {
            this.localStorage.guardar("idDispositivo", "" + Math.floor(Math.random() * 999999) + 1);
        }
        var temp = this.localStorage.getObject("usuarioLogin");
        var usuarioActivo = JSON.parse(temp);
        if (usuarioActivo != null) {
            //this.navCtrl.setRoot("PrincipalPage");
            __WEBPACK_IMPORTED_MODULE_8_raven_js__["setUserContext"]({
                nombrecompleto: usuarioActivo.nombrecompleto,
                identificacion: usuarioActivo.identificacion,
                celular: usuarioActivo.celular,
                email: usuarioActivo.email,
                nombreusuario: usuarioActivo.nombreusuario,
                codigofamiliar: usuarioActivo.codigofamiliar,
                idSesion: usuarioActivo.idSesion
            });
            this.navCtrl.setRoot("TabsPage");
        }
        else {
            this.permisos();
        }
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var nombre = this.myForm.get('nombreusuario').value;
        var contrasena = this.myForm.get('contrasena').value;
        if (nombre != '' && contrasena != '') {
            var usuario = new __WEBPACK_IMPORTED_MODULE_6__models_usuario__["a" /* Usuario */](this.myForm.get('nombreusuario').value, this.myForm.get('contrasena').value);
            var loading_1 = this.loadingController.create({
                spinner: 'ios',
                content: 'Por favor espere...',
                dismissOnPageChange: true
            });
            loading_1.present();
            this.desactivarElementos = true;
            this.operacionesLogin.login(usuario)
                .then(function (data) {
                var usuariotemp = new __WEBPACK_IMPORTED_MODULE_0__models_usuarioRegistro__["a" /* usuarioRegistro */](data.nombrecompleto, data.numeroIdentificacion, data.telefono, data.email, data.nombreUsuario, null, data.codigofamiliar, data.idSesion, null);
                _this.localStorage.guardarObjeto("usuarioLogin", usuariotemp);
                loading_1.dismiss;
                __WEBPACK_IMPORTED_MODULE_8_raven_js__["setUserContext"]({
                    nombrecompleto: usuariotemp.nombrecompleto,
                    identificacion: usuariotemp.identificacion,
                    celular: usuariotemp.celular,
                    email: usuariotemp.email,
                    nombreusuario: usuariotemp.nombreusuario,
                    codigofamiliar: usuariotemp.codigofamiliar,
                    idSesion: usuariotemp.idSesion
                });
                //this.navCtrl.setRoot("PrincipalPage");
                _this.navCtrl.setRoot("TabsPage");
            })
                .catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_8_raven_js__["captureException"](error);
                loading_1.dismiss();
                _this.desactivarElementos = false;
                if (error._body === "Usuario y/o Contraseña incorrecto" ||
                    error._body === "Su grupo familiar se encuentra desactivado, favor revise el estado de su pago mensual" ||
                    error._body === "Problema interno del servidor") {
                    var toast = _this.toastCtl.create({
                        message: error._body,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtl.create({
                        message: "Error desconocido, verifique su conexión a internet",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            });
        }
        else {
            var toast = this.toastCtl.create({
                message: "Ingrese sus credenciales",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
    };
    LoginPage.prototype.omar = function () {
        this.operacionesLogin.metodoOmar()
            .then(function (data) {
            console.log(JSON.stringify(data));
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.permisos = function () {
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.RECORD_AUDIO,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]);
    };
    LoginPage.prototype.setFilteredItems = function () {
        var nombre = this.myForm.get('nombreusuario').value;
        nombre = nombre.trim();
        this.myForm.get("nombreusuario").setValue(nombre.toLowerCase());
    };
    LoginPage.prototype.setFilterPassword = function () {
        var nombre = this.myForm.get('contrasena').value;
        nombre = nombre.trim();
        this.myForm.get("contrasena").setValue(nombre);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n        </ion-col>\n        <ion-col>\n          <ion-title class="color-header">Inicio de sesión</ion-title>\n        </ion-col>\n        <ion-col col-2>\n          <img alt="logo" class="displayed" height="28" src="assets/img/logo_app.png">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm" (ngSubmit)="doLogin()">\n    <ion-item>\n      <ion-icon name="ios-person" item-right></ion-icon>\n      <ion-label floating>nombre de Usuario</ion-label>\n      <ion-input formControlName="nombreusuario" type="text" (ionChange)="setFilteredItems()"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'nombreusuario\').errors && myForm.get(\'nombreusuario\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombreusuario\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombreusuario\').hasError(\'pattern\')">No coincide con el formato</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-key" item-right></ion-icon>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input formControlName="contrasena" type="password" (ionChange)="setFilterPassword()"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'contrasena\').errors && myForm.get(\'contrasena\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'contrasena\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'contrasena\').hasError(\'pattern\')">No coincide con el formato</p>\n    </ion-item>\n\n\n    <div padding>\n      <button ion-button icon-end block type="submit" style="background: #ed7425" [disabled]="desactivarElementos">\n        Entrar\n        <ion-icon name="log-in"></ion-icon>\n      </button>\n    </div>\n\n    <div padding>\n      <button ion-button icon-end block style="background: #ed7425" (tap)="omar()">\n        Entrar2\n        <ion-icon name="log-in"></ion-icon>\n      </button>\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full outline style="color: #ed7425" [navPush]="paginaRegistro">No estas Registrado? Registrate</button>\n    <ion-label style="text-align: center">Santa Marta D.T.C.H</ion-label>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

});
//# sourceMappingURL=2.js.map