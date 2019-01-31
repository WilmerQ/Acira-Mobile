webpackJsonp([1],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */],
            ]
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());

//# sourceMappingURL=principal.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(721);
var bytesToUuid = __webpack_require__(722);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_http_operaciones_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_coordenadas__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_conexion__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_raven_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, localstorage, alertCtrl, navParams, popoverCtrl, geolocation, diagnostico, loadingController, toastCtl, operacionesLogin, push, platform, camera, actionSheetCtrl, transfer, file, media, filePath, network) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localstorage = localstorage;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.geolocation = geolocation;
        this.diagnostico = diagnostico;
        this.loadingController = loadingController;
        this.toastCtl = toastCtl;
        this.operacionesLogin = operacionesLogin;
        this.push = push;
        this.platform = platform;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.file = file;
        this.media = media;
        this.filePath = filePath;
        this.network = network;
        this.minutoPenalizado = 5;
        this.anonimato = false;
        this.posicionActual = null;
        this.precision = null;
        this.uuidv4 = __webpack_require__(720);
        this.Conexion = new __WEBPACK_IMPORTED_MODULE_13__models_conexion__["a" /* conexion */]();
        //audio
        this.recording = false;
        this.reproduciendoAudio = false;
        this.changeLocationState = function (isAvailable) {
            //console.log("cambio de estado de ubicacion: " + isAvailable);
            _this.diagnostico.isLocationEnabled()
                .then(function (state) {
                //console.log("state isLocationEnabled " + state);
                if (state) {
                    //console.log("aqui en state positivo");
                    _this.ubicacion(true);
                    _this.loading.dismiss();
                }
                else {
                    _this.loading = _this.loadingController.create({
                        spinner: 'ios',
                        content: 'Por favor encienda la ubicación en su dispositivo',
                        dismissOnPageChange: true
                    });
                    _this.loading.present();
                }
            }).catch(function (e) { return __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](e); });
        };
        this.cancelLocationState = function (isAvailable) {
            console.log("cambio de estado de ubicacion: " + isAvailable);
            return false;
        };
        this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Por favor encienda la ubicación en su dispositivo',
            dismissOnPageChange: true
        });
        var rutaDirecta = localstorage.getObject("rutadirecta");
        var rutaauto = localstorage.getObject("rutaauto");
        if ((rutaDirecta == null) && (rutaauto == null)) {
            localstorage.guardarObjeto("rutadirecta", true);
            localstorage.guardarObjeto("rutaauto", false);
        }
        this.onResumeSubscription = platform.resume.subscribe(function () {
            //console.log("****************aqui entrando a la app")
            setTimeout(function () {
                _this.magia();
            }, 500);
        });
    }
    PrincipalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //console.log("*****************aqui en ionViewDidEnter");
        if (this.navParams.get("cerrarSesionOk") == "ok") {
            this.cerrarSesion();
        }
        this.diagnostico.isLocationEnabled()
            .then(function (state) {
            if (state) {
                _this.ubicacion(true);
                _this.loading.dismiss();
            }
            else {
                _this.loading.present();
            }
        }).catch(function (e) { return __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](e); });
        this.diagnostico.registerLocationStateChangeHandler(this.changeLocationState);
        setTimeout(function () {
            _this.magia();
        }, 500);
    };
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log("*****************aqui en ionViewDidLoad");
        this.notificacionPush();
    };
    PrincipalPage.prototype.ionViewCanEnter = function () {
        //console.log("*****************aqui en ionViewCanEnter");
        var temp = this.localstorage.getObject("usuarioLogin");
        this.usuarioActivo = JSON.parse(temp);
        if (this.usuarioActivo != null) {
            //console.log("usuario diferente a null");
            if (this.localstorage.getObject("rootPage") == null) {
                this.localstorage.guardar("rootPage", "principal");
            }
        }
    };
    PrincipalPage.prototype.ionViewWillEnter = function () {
        //console.log("*****************aqui en ionViewWillEnter");
    };
    PrincipalPage.prototype.ionViewWillUnload = function () {
        //console.log("*****************aqui en ionViewWillUnload principal page");
        this.onResumeSubscription.unsubscribe();
    };
    PrincipalPage.prototype.magia = function () {
        var temp = this.localstorage.getObject("notificacion1");
        if (temp != null) {
            if (temp.length > 1) {
                var temp2 = JSON.parse(temp);
                //console.log("************************** despues " + temp2.title);
                if (temp != undefined) {
                    this.navCtrl.push("NotificacionPage", { notificacion: temp2 });
                }
            }
        }
    };
    PrincipalPage.prototype.notificacionPush = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                "icon": "notification"
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        //const pushObject: PushObject = this.push.init(options);
        this.pushObject = this.push.init(options);
        this.pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.comandosSecundarios.estado == "cierraSesion") {
                //console.log('Received a notification' + notification.additionalData.comandosSecundarios.estado);
                if (notification.additionalData.foreground) {
                    var toast = _this.toastCtl.create({
                        message: 'Se ha detectado que se ha iniciado sesión en otro dispositivo diferente, si desea seguir utilizando la aplicación vuelva a iniciar sesión',
                        position: 'middle',
                        closeButtonText: 'ok',
                        showCloseButton: true,
                        dismissOnPageChange: false
                    });
                    toast.present();
                }
                notification = null;
                _this.cerrarSesion();
            }
            if (notification.additionalData.foreground) {
                var confirm_1 = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.message,
                    buttons: [
                        {
                            text: 'Ignorar',
                            handler: function () {
                            }
                        },
                        {
                            text: 'Ver Mapa',
                            handler: function () {
                                //console.log('Agree clicked');
                                //this.localstorage.guardarObjeto("notificacion", notification);
                                _this.navCtrl.push("NotificacionPage", { notificacion: notification });
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
            else {
                //this.localstorage.guardarObjeto("notificacion", notification);
                //this.navCtrl.setRoot("NotificacionPage");
            }
        });
        this.pushObject.on('registration').subscribe(function (registration) {
            var registrationId = registration.registrationId;
            //console.log("obtener token" + registrationId)
            _this.operacionesLogin.registrarDispositivoFCM(_this.usuarioActivo, registrationId, _this.localstorage.getObject("idDispositivo"))
                .then(function (data) {
                var toast = _this.toastCtl.create({
                    message: data.mensaje,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](error);
                if (error._body === "cierraSesion") {
                    var toast = _this.toastCtl.create({
                        message: 'Se ha detectado que se ha iniciado sesión en otro dispositivo diferente, si desea seguir utilizando la aplicación vuelva a iniciar sesión ',
                        position: 'middle',
                        closeButtonText: 'ok',
                        showCloseButton: true,
                        dismissOnPageChange: false
                    });
                    toast.present();
                    _this.cerrarSesion();
                }
                else if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación"
                    || error._body === "Problema interno del servidor") {
                    var toast = _this.toastCtl.create({
                        message: 'Por cuestiones de seguridad se debe iniciar sesión nuevamente.',
                        position: 'middle',
                        closeButtonText: 'ok',
                        showCloseButton: true,
                        dismissOnPageChange: false
                    });
                    toast.present();
                    _this.cerrarSesion();
                }
            });
        });
        window.approve = function (data) {
            console.log('approve called ----------------');
            console.log("aqui el json de data " + JSON.stringify(data));
            window.localStorage.setItem("notificacion1", JSON.stringify(data[0]));
        };
        window.reject = function (data) {
            console.log('Reject called ---------------------');
        };
        this.pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    PrincipalPage.prototype.ubicacion = function (activada) {
        var _this = this;
        var options = {
            enableHighAccuracy: true,
            maximumAge: 0
        };
        var monitorUbicacion = this.geolocation.watchPosition(options)
            .filter(function (p) { return p.coords !== undefined; }) //Filter Out Errors
            .subscribe(function (position) {
            _this.precision = position.coords.accuracy;
            //console.log(position.coords.longitude + ' ' + position.coords.latitude + ' acua ' + position.coords.accuracy);
            if (position.coords.accuracy < 25) {
                _this.posicionActual = position.coords;
            }
        });
        if (!activada) {
            //console.log("aquui en unsubscribe ");
            monitorUbicacion.unsubscribe();
        }
    };
    PrincipalPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Desea cerrar sesión en este dispositivo?',
            message: 'Si cierra sesión no podrá recibir las notificaciones de reportes de otros usuarios',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.cerrarSesion();
                    }
                }
            ]
        });
        confirm.present();
    };
    PrincipalPage.prototype.preconfirmarpanico = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Reportar pánico?',
            message: 'A continuación, se activarán las sirenas de alta potencia, se recomienda realizar una descripción de voz o de texto sobre la situación.',
            buttons: [
                {
                    text: 'NO',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this.doPanico();
                    }
                }
            ]
        });
        confirm.present();
    };
    PrincipalPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("PopoverPage", { tipo: "general" });
        popover.onDidDismiss(function (data) {
            //console.log(data);
            if (data != null) {
                if (data == "cerrarSesion")
                    _this.showConfirm();
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    PrincipalPage.prototype.cerrarSesion = function () {
        this.pushObject.unregister();
        this.localstorage.delete("rootPage");
        this.localstorage.delete("usuarioLogin");
        //this.navCtrl.setRoot("LoginPage");
        //this.navCtrl.popToRoot();
        this.navCtrl.setRoot("TabsPage", { objeto: "cerrarSesion" });
    };
    PrincipalPage.prototype.doPanico = function () {
        var _this = this;
        //console.log("touch en panico");
        this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Reportando...',
            dismissOnPageChange: true
        });
        this.loading.present();
        /*if (this.network.type === 'none') {
          // console.log('ninguna conexion disponible');
          this.loading.dismiss();
          let toast = this.toastCtl.create({
            message: 'No se ha detectado ninguna conexión disponible para reportar.',
            position: 'middle',
            closeButtonText: 'ok',
            showCloseButton: true,
            dismissOnPageChange: false
          });
          toast.present();
        } else {*/
        //console.log("conexion disponible " + this.network.type);
        var temp = this.localstorage.getObject("fechaReporte");
        var fecha = temp;
        if (fecha == null) {
            if (this.posicionActual != null) {
                //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
                var coordenadasTemp = new __WEBPACK_IMPORTED_MODULE_2__models_coordenadas__["a" /* coordenadas */](this.posicionActual.accuracy, this.posicionActual.altitude, this.posicionActual.altitudeAccuracy, this.posicionActual.heading, this.posicionActual.latitude, this.posicionActual.longitude, this.posicionActual.speed);
                this.operacionesLogin.enviarpanico(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
                    .then(function (data) {
                    var fechaReporte = new Date();
                    //console.log("fecha del reporte " + fechaReporte.getTime());
                    _this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
                    _this.loading.dismiss();
                    var toast = _this.toastCtl.create({
                        message: data.mensaje,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    //this.lastImage = null;
                    _this.mostrarImagen = false;
                    _this.fileName = undefined;
                    _this.mensaje = "";
                }).catch(function (error) {
                    __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](error);
                    _this.loading.dismiss();
                    if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                        error._body === "Intente nuevamente" ||
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
                            message: "Error desconocido, verifique su conexión a internet.",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                });
            }
            else {
                //console.log('posicion actual null');
                this.loading.dismiss();
                var toast = this.toastCtl.create({
                    message: 'La precisión de la ubicación mínima es de 25 metros y el GPS en este momento tiene una precisión ' + this.precision,
                    position: 'middle',
                    closeButtonText: 'ok',
                    showCloseButton: true,
                    dismissOnPageChange: false
                });
                toast.present();
            }
        }
        else {
            var fechaActual = new Date();
            var duracion = (fechaActual.getTime() - fecha);
            if (duracion < this.minutoPenalizado * 60 * 1000) {
                this.loading.dismiss();
                //console.log("penalizado por tiempo");
                var toast = this.toastCtl.create({
                    message: "Usted ya ha reportado en los últimos 5 minutos, espere ese mínimo lapso de tiempo para volver a realizarlo ",
                    duration: 4000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                if (this.posicionActual != null) {
                    //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
                    var coordenadasTemp = new __WEBPACK_IMPORTED_MODULE_2__models_coordenadas__["a" /* coordenadas */](this.posicionActual.accuracy, this.posicionActual.altitude, this.posicionActual.altitudeAccuracy, this.posicionActual.heading, this.posicionActual.latitude, this.posicionActual.longitude, this.posicionActual.speed);
                    this.operacionesLogin.enviarpanico(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
                        .then(function (data) {
                        var fechaReporte = new Date();
                        //console.log("fecha del reporte " + fechaReporte.getTime());
                        _this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
                        _this.loading.dismiss();
                        var toast = _this.toastCtl.create({
                            message: data.mensaje,
                            duration: 2000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.mensaje = "";
                        _this.fileName = undefined;
                        _this.mostrarImagen = false;
                        //this.lastImage = null;
                    }).catch(function (error) {
                        __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](error);
                        _this.loading.dismiss();
                        if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                            error._body === "Intente nuevamente" ||
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
                                message: "Error desconocido, verifique su conexión a internet.",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                    });
                }
                else {
                    //console.log('posicion actual null');
                    this.loading.dismiss();
                    var toast = this.toastCtl.create({
                        message: 'La precisión de la ubicación mínima es de 25 metros y el GPS en este momento tiene una precisión ' + this.precision,
                        position: 'middle',
                        closeButtonText: 'ok',
                        showCloseButton: true,
                        dismissOnPageChange: false
                    });
                    toast.present();
                }
            }
        }
        //}
    };
    PrincipalPage.prototype.doSospecha = function () {
        var _this = this;
        //console.log("touch en sospecha");
        var loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Reportando...',
            dismissOnPageChange: true
        });
        loading.present();
        //console.log("******************** mensaje " + this.mensaje);
        //console.log("******************** audio " + this.audio);
        //if ((this.mensaje != undefined && this.mensaje.length < 10) ||
        //(this.audio != undefined && this.audio.getDuration() < 5)) {
        if ((this.mensaje == undefined || this.mensaje.length < 10) && this.audio == undefined) {
            loading.dismiss();
            //console.log("mensaje corto");
            var toast = this.toastCtl.create({
                message: "Debe ingresar una breve descripción del reporte o grabe una nota de voz.",
                duration: 3500,
                position: 'middle'
            });
            toast.present();
        }
        else {
            /*if (this.network.type === 'none') {
              //console.log('ninguna conexion disponible');
              loading.dismiss();
              let toast = this.toastCtl.create({
                message: 'No se ha detectado ninguna conexión disponible para reportar.',
                position: 'middle',
                closeButtonText: 'ok',
                showCloseButton: true,
                dismissOnPageChange: false
              });
              toast.present();
            } else {*/
            //console.log("conexion disponible " + this.network.type);
            var temp = this.localstorage.getObject("fechaReporte");
            var fecha = temp;
            if (fecha == null) {
                if (this.posicionActual != null) {
                    //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
                    var coordenadasTemp = new __WEBPACK_IMPORTED_MODULE_2__models_coordenadas__["a" /* coordenadas */](this.posicionActual.accuracy, this.posicionActual.altitude, this.posicionActual.altitudeAccuracy, this.posicionActual.heading, this.posicionActual.latitude, this.posicionActual.longitude, this.posicionActual.speed);
                    this.operacionesLogin.enviarSospecha(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
                        .then(function (data) {
                        var fechaReporte = new Date();
                        //console.log("fecha del reporte " + fechaReporte.getTime());
                        _this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
                        loading.dismiss();
                        var toast = _this.toastCtl.create({
                            message: data.mensaje,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.fileName = undefined;
                        //this.lastImage = null;
                        _this.mostrarImagen = false;
                        _this.mensaje = "";
                    }).catch(function (error) {
                        __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](error);
                        loading.dismiss();
                        if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                            error._body === "Intente nuevamente" ||
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
                                message: "Error desconocido, verifique su conexión a internet.",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                        }
                    });
                }
                else {
                    //console.log('posicion actual null');
                    loading.dismiss();
                    var toast = this.toastCtl.create({
                        message: 'La precisión de la ubicación mínima es de 25 metros y el GPS en este momento tiene una precisión ' + this.precision,
                        position: 'middle',
                        closeButtonText: 'ok',
                        showCloseButton: true,
                        dismissOnPageChange: false
                    });
                    toast.present();
                }
            }
            else {
                var fechaActual = new Date();
                var duracion = (fechaActual.getTime() - fecha);
                if (duracion < this.minutoPenalizado * 60 * 1000) {
                    loading.dismiss();
                    //console.log("penalizado por tiempo");
                    var toast = this.toastCtl.create({
                        message: "Usted ya ha reportado en los últimos 5 minutos, espere ese mínimo lapso de tiempo para volver a realizarlo ",
                        duration: 4000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    if (this.posicionActual != null) {
                        //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
                        var coordenadasTemp = new __WEBPACK_IMPORTED_MODULE_2__models_coordenadas__["a" /* coordenadas */](this.posicionActual.accuracy, this.posicionActual.altitude, this.posicionActual.altitudeAccuracy, this.posicionActual.heading, this.posicionActual.latitude, this.posicionActual.longitude, this.posicionActual.speed);
                        this.operacionesLogin.enviarSospecha(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
                            .then(function (data) {
                            var fechaReporte = new Date();
                            //console.log("fecha del reporte " + fechaReporte.getTime());
                            _this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
                            loading.dismiss();
                            var toast = _this.toastCtl.create({
                                message: data.mensaje,
                                duration: 2000,
                                position: 'middle'
                            });
                            toast.present();
                            _this.mensaje = "";
                            //this.lastImage = null;
                            _this.mostrarImagen = false;
                            _this.fileName = undefined;
                        }).catch(function (error) {
                            __WEBPACK_IMPORTED_MODULE_15_raven_js__["captureException"](error);
                            loading.dismiss();
                            if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                                error._body === "Intente nuevamente" ||
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
                                    message: "Error desconocido, verifique su conexión a internet.",
                                    duration: 3000,
                                    position: 'middle'
                                });
                                toast.present();
                            }
                        });
                    }
                    else {
                        //console.log('posicion actual null');
                        loading.dismiss();
                        var toast = this.toastCtl.create({
                            message: 'La precisión de la ubicación mínima es de 25 metros y el GPS en este momento tiene una precisión ' + this.precision,
                            position: 'middle',
                            closeButtonText: 'ok',
                            showCloseButton: true,
                            dismissOnPageChange: false
                        });
                        toast.present();
                    }
                }
            }
            //}
        }
    };
    PrincipalPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            title: 'Seleccionar fuente de la imagen',
            buttons: [
                {
                    icon: "ios-image",
                    text: 'Cargar desde la Galeria',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    icon: 'ios-camera',
                    text: 'Usar Camara',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
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
    PrincipalPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.lastImage == null && _this.lastImage == undefined) {
                //console.log("aqui antes de generar uuid");
                _this.uuid = _this.uuidv4();
            }
            else {
                _this.uuid = _this.uuidv4();
            }
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                    _this.uuidImagen = _this.uuid;
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                _this.uuidImagen = _this.uuid;
            }
        }, function (err) {
            _this.presentToast('No se seleccionó ninguna fotografía.');
        });
    };
    PrincipalPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    PrincipalPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.mostrarImagen = true;
            _this.uploadImage();
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    PrincipalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    PrincipalPage.prototype.presentToastPos = function (text, ubicacion) {
        var toast = this.toastCtl.create({
            message: text,
            duration: 2000,
            position: ubicacion
        });
        toast.present();
    };
    PrincipalPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.dataDirectory + img;
        }
    };
    PrincipalPage.prototype.uploadImage = function () {
        var _this = this;
        var url = this.Conexion.urlWebServices + "eventos/subirfoto";
        var targetPath = this.pathForImage(this.lastImage);
        var options = {
            fileKey: "file",
            fileName: this.uuidImagen + ".jpg",
            httpMethod: "POST",
            mimeType: "multipart/form-data",
            params: { 'UUID': this.uuidImagen }
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Imagen cargada con éxito.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error al cargar el archivo.');
        });
        /*fileTransfer.onProgress((progressEvent) => {
          console.log(progressEvent);
          if (progressEvent.lengthComputable) {
            var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            console.log("porcentaje " + perc)
          } else {
            if (status == "") {
              status = "Loading";
            } else {
              status += ".";
            }
          }
        });*/
    };
    PrincipalPage.prototype.startRecord = function () {
        this.uuidGrabacionVoz = this.uuidv4();
        if (this.platform.is('ios')) {
            this.fileName = "grabacion-" + this.uuidGrabacionVoz + '.3gp';
            this.filePath2 = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath2);
        }
        else if (this.platform.is('android')) {
            this.fileName = "grabacion-" + this.uuidGrabacionVoz + '.3gp';
            this.filePath2 = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath2);
        }
        this.audio.startRecord();
        this.recording = true;
        this.presentToastPos("Presione para Grabar, Suelte para guardar", "bottom");
    };
    PrincipalPage.prototype.stopRecord = function () {
        this.audio.stopRecord();
        this.recording = false;
        this.uploadAudio();
    };
    PrincipalPage.prototype.playAudio = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            this.filePath2 = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath2);
        }
        else if (this.platform.is('android')) {
            this.filePath2 = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath2);
        }
        this.audio.play();
        this.audio.setVolume(0.9);
        this.reproduciendoAudio = true;
        this.audio.onStatusUpdate.subscribe(function (data) {
            console.log("aqui en el status del audio " + data);
            if (data == 4) {
                _this.reproduciendoAudio = false;
            }
        });
    };
    PrincipalPage.prototype.uploadAudio = function () {
        var _this = this;
        var url = this.Conexion.urlWebServices + "eventos/subirAudio";
        var options = {
            fileKey: "file",
            fileName: this.uuidGrabacionVoz + ".3gp",
            httpMethod: "POST",
            mimeType: "multipart/form-data",
            params: { 'UUID': this.uuidGrabacionVoz }
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.filePath2, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Grabación cargada con éxito.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error al cargar el archivo.');
        });
    };
    PrincipalPage.prototype.stopAudio = function () {
        this.audio.pause();
        this.reproduciendoAudio = false;
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\principal\principal.html"*/'<!--\n  Generated template for the PrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-padding>\n  <ion-navbar no-padding>\n    <ion-grid no-padding>\n      <ion-row margin-top>\n        <ion-col col-2 style="height: 35px">\n          <img alt="logo" class="displayed" height="28" src="assets/img/logo_app.png">\n        </ion-col>\n        <ion-col>\n          <ion-title class="color-header" *ngIf="usuarioActivo != null"> {{ usuarioActivo.nombreusuario }} </ion-title>\n        </ion-col>\n        <ion-col col-2>\n          <ion-buttons right>\n            <button ion-button icon-only (click)="presentPopover($event)">\n              <ion-icon name="more"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid padding margin>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines tappable (click)="preconfirmarpanico()">\n          <img ion-img alt="logo" class="displayed" height="129" src="assets/img/panico.png">\n          <h1 text-center>Pánico</h1>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item no-lines tappable (click)="doSospecha()">\n          <img ion-img alt="logo" class="displayed" height="129" src="assets/img/sospechoso.png">\n          <h1 text-center>Sospecha</h1>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row no-margin no-padding style="background: #dee2ed">\n    <ion-col no-margin no-padding>\n      <textarea outline no-margin no-padding #myInput id="myInput" style="background: #dee2ed" placeholder="Escriba un mensaje de máximo 150 caracteres relatando lo que sucede."\n        rows="5" maxLength="150" [(ngModel)]="this.mensaje"></textarea>\n    </ion-col>\n\n    <ion-col col-auto no-padding no-margin>\n      <ion-row no-padding no-margin>\n        <ion-col col-auto no-padding no-margin>\n          <button no-margin no-padding ion-button icon-only clear (click)="presentActionSheet()" style="width: 44px; height: 40px;background: #dee2ed">\n            <ion-icon name="ios-camera"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row no-padding no-margin>\n        <ion-col col-auto no-padding no-margin>\n          <button (touchstart)="startRecord()" (touchend)="stopRecord()" no-margin no-padding ion-button icon-only\n            clear style="width: 44px; height: 40px; background: #dee2ed">\n            <!--<ion-icon  name="ios-mic"></ion-icon>-->\n            <ion-icon *ngIf="recording" isActive="true" name="mic-off"></ion-icon>\n            <ion-icon *ngIf="!recording" name="mic"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-item padding-left no-lines>\n    <ion-label>¿Reportar de manera anónima?</ion-label>\n    <ion-checkbox [(ngModel)]="this.anonimato"></ion-checkbox>\n  </ion-item>\n\n  <ion-item *ngIf="!recording && fileName != undefined" no-padding no-lines>\n    <p>Grabación de voz</p>\n    <button ion-button clear item-start large (click)="playAudio()" *ngIf="!reproduciendoAudio">\n      <ion-icon name="play"></ion-icon>\n    </button>\n    <button ion-button clear item-start large (click)="stopAudio()" *ngIf="reproduciendoAudio">\n      <ion-icon name="pause"></ion-icon>\n    </button>\n  </ion-item>\n\n  <img src="{{pathForImage(lastImage)}}" style="width: 100%" *ngIf="mostrarImagen">\n\n  <!--<ion-fab right bottom>\n    <button ion-fab mini no-padding no-margin large color="danger" (click)="showConfirm()">\n      <ion-icon name="log-out"></ion-icon>\n    </button>\n  </ion-fab>\n  -->\n</ion-content>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coordenadas; });
var coordenadas = /** @class */ (function () {
    function coordenadas(accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed) {
        this.accuracy = accuracy;
        this.altitude = altitude;
        this.altitudeAccuracy = altitudeAccuracy;
        this.heading = heading;
        this.latitude = latitude;
        this.longitude = longitude;
        this.speed = speed;
    }
    return coordenadas;
}());

//# sourceMappingURL=coordenadas.js.map

/***/ })

});
//# sourceMappingURL=1.js.map