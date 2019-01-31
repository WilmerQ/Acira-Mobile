webpackJsonp([0],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

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

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validators_validacionesAsincronas__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuarioRegistro__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_operaciones_http_operaciones_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_conexion__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators_validaciones__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














//import { Scandit } from "barcodescanner-sdk-cordova";
//declare var Pdf417Scanner: any;
//declare var Scandit;
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, fb, loadingController, localStorage, toastCtl, toastCtrl, operacionesLogin, validacionesAsyn, modalCtrl, platform, alertCtrl, camera, actionSheetCtrl, filePath, transfer, file, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.loadingController = loadingController;
        this.localStorage = localStorage;
        this.toastCtl = toastCtl;
        this.toastCtrl = toastCtrl;
        this.operacionesLogin = operacionesLogin;
        this.validacionesAsyn = validacionesAsyn;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.filePath = filePath;
        this.transfer = transfer;
        this.file = file;
        this.httpProvider = httpProvider;
        this.actualizar = false;
        this.cucumber = true;
        this.uuidv4 = __webpack_require__(720);
        this.Conexion = new __WEBPACK_IMPORTED_MODULE_7__models_conexion__["a" /* conexion */]();
        this.ciudades = [];
        this.barrios = [];
        this.ciudadSelecionada = false;
        this.barrioSelecionado = false;
        this.colorBotton = "#ed7425";
        this.textBotton = "Captura tu cedula";
        this.actualizar = navParams.get("actualizar");
        this.cambioContra = false;
        this.myForm = this.fb.group({
            nombrecompleto: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            identificacion: ['',
                [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^([0-9])*$/)],
                this.validacionesAsyn.validarNumeroIdentificacion.bind(this.validacionesAsyn)
            ],
            celular: ['',
                [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^3([0-9])*$/)],
                this.validacionesAsyn.validarTelefono.bind(this.validacionesAsyn)
            ],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            email: ['',
                [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email]
            ],
            nombreusuario: ['',
                [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{5,16}$/), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(5)],
                this.validacionesAsyn.validarNombreUsuario.bind(this.validacionesAsyn)
                //this.validarNombreUsuario.bind(this)
            ],
            contrasena: ['',
                [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/), __WEBPACK_IMPORTED_MODULE_8__validators_validaciones__["a" /* validaciones */].buscarMayuscula, __WEBPACK_IMPORTED_MODULE_8__validators_validaciones__["a" /* validaciones */].buscarNumeros]
            ],
            confirmacion: ['',
                [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/), __WEBPACK_IMPORTED_MODULE_8__validators_validaciones__["a" /* validaciones */].buscarMayuscula, __WEBPACK_IMPORTED_MODULE_8__validators_validaciones__["a" /* validaciones */].buscarNumeros]
            ],
            //codigofamiliar: ['', [Validators.required, Validators.minLength(8)]],
            codigofamiliar: ['', []],
            terminos: [false, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].requiredTrue]
        });
        if (this.actualizar) {
            var temp = this.localStorage.getObject("usuarioLogin");
            this.usuarioActivo = JSON.parse(temp);
            this.myForm.get("nombrecompleto").setValue(this.usuarioActivo.nombrecompleto);
            this.myForm.get("identificacion").setValue(this.usuarioActivo.identificacion);
            this.myForm.get("identificacion").clearAsyncValidators();
            this.myForm.get("celular").setValue(this.usuarioActivo.celular);
            this.myForm.get("celular").clearAsyncValidators();
            this.myForm.get("email").setValue(this.usuarioActivo.email);
            this.myForm.get("nombreusuario").setValue(this.usuarioActivo.nombreusuario);
            this.myForm.get("nombreusuario").clearAsyncValidators();
            this.myForm.get("contrasena").setValue("");
            this.myForm.get("confirmacion").setValue("");
            this.myForm.get("codigofamiliar").setValue(this.usuarioActivo.codigofamiliar);
            this.myForm.get("codigofamiliar").disable();
            this.myForm.get("identificacion").disable();
            this.myForm.get("terminos").setValue(true);
            this.myForm.get("terminos").disable();
        }
    }
    RegistroPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        /*if (!this.actualizar) {
          let profileModal = this.modalCtrl.create("ModalyoutubePage");
          profileModal.present();
        }*/
        //if (!this.actualizar) {
        console.log("aqui en ionViewDidEnter");
        this.httpProvider.getCiudadesActivas().then(function (data) {
            console.log("********************* recibiendo ciudades");
            console.log(JSON.stringify(data));
            _this.ciudades = data;
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
        //}
    };
    RegistroPage.prototype.ionChangeCiudad = function (temp) {
        var _this = this;
        console.log("ionChangeCiudad " + JSON.stringify(temp));
        this.ciudadNombre = temp;
        this.ciudadSelecionada = true;
        this.httpProvider.getBarriosActivos(temp).then(function (data) {
            console.log("********************* recibiendo barrios");
            console.log(JSON.stringify(data));
            _this.barrios = data;
        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
    };
    RegistroPage.prototype.ionChangeBarrio = function (temp) {
        console.log("ionChangeCiudad " + JSON.stringify(temp));
        this.barrioNombre = temp;
        this.barrioSelecionado = true;
    };
    RegistroPage.prototype.preRegistro = function () {
        var _this = this;
        if (this.textBotton === "Captura tu cedula") {
            var toast = this.toastCtrl.create({
                message: "Debe capturar una fotografía de su documento de identidad por la parte frontal",
                duration: 4000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            this.operacionesLogin.crearCodigoSeguridad(this.myForm.get('identificacion').value, this.myForm.get('nombrecompleto').value, this.ciudadNombre, this.barrioNombre, this.myForm.get('direccion').value).then(function (data) {
                console.log("********************* creando codigo seguridad");
                console.log(JSON.stringify(data));
                _this.codigoGenerado = data.codigo;
                console.log(_this.codigoGenerado);
                _this.doRegister();
            }).catch(function (error) {
                console.log(JSON.stringify(error));
            });
        }
    };
    RegistroPage.prototype.doRegister = function () {
        var _this = this;
        var loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        loading.present();
        if (this.myForm.get('contrasena').value === this.myForm.get('confirmacion').value) {
            var nuevoUsuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuarioRegistro__["a" /* usuarioRegistro */](this.myForm.get('nombrecompleto').value, this.myForm.get('identificacion').value, this.myForm.get('celular').value, this.myForm.get('email').value, this.myForm.get('nombreusuario').value, this.myForm.get('contrasena').value, this.codigoGenerado, null, this.uuidImagen);
            this.operacionesLogin.registro(nuevoUsuario)
                .then(function (data) {
                _this.myForm.reset();
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: data.mensaje,
                    duration: 4000,
                    position: 'middle'
                });
                toast.present();
                _this.navCtrl.setRoot("LoginPage");
                _this.navCtrl.popToRoot();
            })
                .catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_9_raven_js__["captureException"](error);
                loading.dismiss();
                if (error._body == "El código familiar ingresado no concuerda, favor verificarlo y vuelva intentar" ||
                    error._body == "El nombre de usuario ya se encuentra siendo utilizado por otro usuario, favor ingrese uno diferente" ||
                    error._body == "Ya se encuentra registrado un usuario con el mismo número de identificación, favor verifique" ||
                    error._body == "Otro usuario registro el número de celular, favor verifique o cámbielo" ||
                    error._body == "El código familiar ya alcanzo el cupo de usuarios establecido, si desea extender el número de usuarios colóquese en contacto con el prestador del servicio." ||
                    error._body == "Problema interno del servidor") {
                    var toast = _this.toastCtrl.create({
                        message: error._body,
                        duration: 4000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Error desconocido, verifique su conexión a internet",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            });
        }
        else {
            loading.dismiss();
            this.myForm.get('confirmacion').setValue('');
            var toast = this.toastCtrl.create({
                message: 'la confirmación no coincide con la contraseña, vuelva a ingresarla',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }
    };
    RegistroPage.prototype.doActualizar = function () {
        var _this = this;
        //console.log("aqui en doActualizar");
        var contrasena;
        var actualizarUsuario = false;
        var loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Por favor espere...',
            dismissOnPageChange: true
        });
        loading.present();
        if (this.myForm.get('contrasena').value == null && this.myForm.get('confirmacion').value == null) {
            contrasena = null;
        }
        if (this.myForm.get('contrasena').value.length > 5 || this.myForm.get('confirmacion').value.length > 5) {
            if (this.myForm.get('contrasena').value == this.myForm.get('confirmacion').value) {
                contrasena = this.myForm.get('contrasena').value;
                actualizarUsuario = true;
            }
            else {
                loading.dismiss();
                var toast = this.toastCtrl.create({
                    message: 'La contraseña y la confirmación no coinciden, por favor revisar',
                    duration: 4000,
                    position: 'middle'
                });
                toast.present();
            }
        }
        if (this.usuarioActivo.nombrecompleto != this.myForm.get('nombrecompleto').value) {
            actualizarUsuario = true;
        }
        if (this.usuarioActivo.celular != this.myForm.get('celular').value) {
            actualizarUsuario = true;
        }
        if (this.usuarioActivo.email != this.myForm.get('email').value) {
            actualizarUsuario = true;
        }
        if (this.usuarioActivo.nombreusuario != this.myForm.get('nombreusuario').value) {
            actualizarUsuario = true;
        }
        var usuarioActualizar = new __WEBPACK_IMPORTED_MODULE_2__models_usuarioRegistro__["a" /* usuarioRegistro */](this.myForm.get('nombrecompleto').value, this.usuarioActivo.identificacion, this.myForm.get('celular').value, this.myForm.get('email').value, this.myForm.get('nombreusuario').value, contrasena, this.usuarioActivo.codigofamiliar, this.usuarioActivo.idSesion, null);
        if (actualizarUsuario) {
            this.operacionesLogin.actualizar(usuarioActualizar)
                .then(function (data) {
                _this.myForm.reset();
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: data.mensaje,
                    duration: 4000,
                    position: 'middle'
                });
                toast.present();
                _this.navCtrl.setRoot("PrincipalPage", { cerrarSesionOk: "ok" });
                _this.navCtrl.popToRoot();
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_9_raven_js__["captureException"](error);
                loading.dismiss();
                if (error._body == "El nombre de usuario ya se encuentra siendo utilizado por otro usuario, favor ingrese uno diferente" ||
                    error._body == "Otro usuario registro el número de celular, favor verifique o cámbielo" ||
                    error._body == "Problema interno del servidor") {
                    var toast = _this.toastCtrl.create({
                        message: error._body,
                        duration: 4000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Error desconocido, verifique su conexión a internet",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            });
        }
        else {
            loading.dismiss();
            var toast = this.toastCtrl.create({
                message: 'ningun dato modificado',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }
    };
    RegistroPage.prototype.terminos = function () {
        var con = new __WEBPACK_IMPORTED_MODULE_7__models_conexion__["a" /* conexion */]();
        //window.open("http://" + con.ip + ":" + con.port + "/Acira/terminos.xhtml", '_system', 'location=yes');
        return "http://" + con.ip + ":" + con.port + "/Acira/terminos.xhtml";
    };
    RegistroPage.prototype.setFilteredItems = function () {
        var nombre = this.myForm.get('nombreusuario').value;
        if (nombre != null) {
            nombre = nombre.trim();
            this.myForm.get("nombreusuario").setValue(nombre.toLowerCase());
        }
    };
    RegistroPage.prototype.setFilterPassword = function () {
        var nombre = this.myForm.get('contrasena').value;
        if (nombre != null) {
            nombre = nombre.trim();
            this.myForm.get("contrasena").setValue(nombre);
        }
    };
    RegistroPage.prototype.setFilterConfimacion = function () {
        var nombre = this.myForm.get('confirmacion').value;
        if (nombre != null) {
            nombre = nombre.trim();
            this.myForm.get("confirmacion").setValue(nombre);
        }
    };
    RegistroPage.prototype.updateCucumber = function () {
        if (this.cucumber) {
            this.cucumber = false;
        }
        else {
            this.cucumber = true;
        }
        console.log('Cucumbers new state:' + this.cucumber);
    };
    /*escanercedula() {
      let temp: any;
      let options: BarcodeScannerOptions;
      let result: BarcodeScanResult;
  
      options = {
        formats: "PDF_417",
        orientation: 'landscape',
        prompt: 'escanea el codigo de barras de tu cedula de ciudadina colombiana para poder registrarte.',
        showTorchButton: true,
        showFlipCameraButton: true
      }
      
      this.barcodeScanner.scan(options).then(barcodeData => {
        console.log("-------------------------------------------------");
        //console.log('******************Barcode data ' + barcodeData.text.length);
        console.log('******************Barcode data ' + barcodeData.format);
        console.log('******************Barcode data ' + barcodeData.cancelled);
        console.log("hola mundo " + JSON.stringify(temp).toString());
      }).catch(err => {
        console.log('Error', err);
      });
  }*/
    //---------------------------------------------------------------------------------
    RegistroPage.prototype.presentActionSheet = function () {
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
    RegistroPage.prototype.takePicture = function (sourceType) {
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
    RegistroPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    RegistroPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.mostrarImagen = true;
            _this.uploadImage();
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    RegistroPage.prototype.presentToast = function (text) {
        var toast = this.toastCtl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RegistroPage.prototype.presentToastPos = function (text, ubicacion) {
        var toast = this.toastCtl.create({
            message: text,
            duration: 2000,
            position: ubicacion
        });
        toast.present();
    };
    RegistroPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.dataDirectory + img;
        }
    };
    RegistroPage.prototype.uploadImage = function () {
        var _this = this;
        var url = this.Conexion.urlWebServices + "usuario/subirdocumento";
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
            //this.loading.dismissAll()
            _this.colorBotton = "#32db64";
            _this.textBotton = "Cargada.";
            _this.presentToast('Imagen cargada con éxito.');
        }, function (err) {
            //this.loading.dismissAll()
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
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\registro\registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-title class="color-header">Datos de Registro</ion-title>\n        </ion-col>\n        <ion-col col-2>\n          <img alt="logo" class="displayed" height="28" src="assets/img/logo_app.png">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form id="form1" [formGroup]="myForm" novalidate>\n    <ion-item>\n      <ion-icon name="ios-person" item-right></ion-icon>\n      <ion-label floating>Nombre Completo</ion-label>\n      <ion-input formControlName="nombrecompleto" type="text"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="myForm.get(\'nombrecompleto\').errors && myForm.get(\'nombrecompleto\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombrecompleto\').hasError(\'required\')">Se requiere el campo</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="ios-grid-outline" item-right></ion-icon>\n      <ion-label floating>Número de identificación</ion-label>\n      <ion-input formControlName="identificacion" type="number"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'identificacion\').errors && myForm.get(\'identificacion\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'identificacion\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'identificacion\').hasError(\'pattern\')">No coincide con el formato</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'identificacion\').hasError(\'identificacionInUse\')">Esta\n        identificación ya se encuentra en uso.</p>\n    </ion-item>\n\n    <button ion-button icon-end block (tap)="presentActionSheet()" *ngIf="!actualizar" [style.background-color]="colorBotton">\n      {{ textBotton }}\n      <ion-icon name="barcode"></ion-icon>\n    </button>\n\n    <ion-item>\n      <ion-icon name="phone-portrait" item-right></ion-icon>\n      <ion-label floating>Celular</ion-label>\n      <ion-input formControlName="celular" type="number"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'celular\').errors && myForm.get(\'celular\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'celular\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'celular\').hasError(\'pattern\')">No coincide con el formato</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'celular\').hasError(\'telefonoInUse\')">Esta telefono ya se encuentra\n        en uso.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="ios-at" item-right></ion-icon>\n      <ion-label floating>Correo electrónico</ion-label>\n      <ion-input formControlName="email" type="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">No coincide con el formato</p>\n    </ion-item>\n\n    <!--<ion-item>\n      <ion-label>posee codigo familiar?</ion-label>\n      <ion-toggle ios (ionChange)="updateCucumber()" checked="false"></ion-toggle>\n    </ion-item>-->\n\n    <ion-item>\n      <ion-label>Ciudad</ion-label>\n      <ion-select interface="action-sheet" (ionChange)="ionChangeCiudad($event)">\n        <ion-option *ngFor="let c of ciudades">{{c.nombre}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="ciudadSelecionada">\n      <ion-label>Barrio</ion-label>\n      <ion-select (ionChange)="ionChangeBarrio($event)">\n        <ion-option *ngFor="let b of barrios">{{b.nombre}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="barrioSelecionado">\n      <ion-icon name="ios-person" item-right></ion-icon>\n      <ion-label floating>Dirección de residencia </ion-label>\n      <ion-input formControlName="direccion" type="text"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="myForm.get(\'direccion\').errors && myForm.get(\'direccion\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'direccion\').hasError(\'required\')">Se requiere el campo</p>\n    </ion-item>\n\n    <ion-item *ngIf="actualizar">\n      <ion-icon name="ios-people" item-right></ion-icon>\n      <ion-label floating>Código familiar (Código estudiantil)</ion-label>\n      <ion-input formControlName="codigofamiliar" type="number"></ion-input>\n    </ion-item>\n    <!--<ion-item *ngIf="myForm.get(\'codigofamiliar\').errors && myForm.get(\'codigofamiliar\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'codigofamiliar\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'codigofamiliar\').hasError(\'minlength\')">Mínimo 8 números</p>\n    </ion-item>-->\n\n    <ion-item>\n      <ion-icon name="ios-person" item-right></ion-icon>\n      <ion-label floating>nombre de Usuario</ion-label>\n      <ion-input formControlName="nombreusuario" type="text" (ionChange)="setFilteredItems()"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'nombreusuario\').errors && myForm.get(\'nombreusuario\').dirty">\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombreusuario\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombreusuario\').hasError(\'minlength\')">Mínimo 5 Caracteres</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombreusuario\').hasError(\'pattern\')">No coincide con el formato</p>\n      <p color="danger" ion-text *ngIf="myForm.get(\'nombreusuario\').hasError(\'nombreUsuarioInUse\')">nombre de usuario\n        no disponible.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-key" item-right></ion-icon>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input formControlName="contrasena" type="password" (ionChange)="setFilterPassword()"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="myForm.get(\'contrasena\').errors && myForm.get(\'contrasena\').dirty">\n      <p color="danger" ion-text [hidden]="!myForm.get(\'contrasena\').hasError(\'required\')">Se requiere el campo.</p>\n      <p color="danger" ion-text [hidden]="!myForm.get(\'contrasena\').hasError(\'mayuscula\')">Este campo requiere mínimo\n        una MAYÚSCULA.</p>\n      <p color="danger" ion-text [hidden]="!myForm.get(\'contrasena\').hasError(\'numero\')">Este campo requiere mínimo un\n        numero.</p>\n      <p color="danger" ion-text [hidden]="!myForm.get(\'contrasena\').hasError(\'pattern\')">No coincide con el formato,\n        Mínimo 6 Caracteres.</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-key" item-right></ion-icon>\n      <ion-label floating>Confirmación</ion-label>\n      <ion-input formControlName="confirmacion" type="password" (ionChange)="setFilterConfimacion()"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="myForm.get(\'confirmacion\').errors && myForm.get(\'confirmacion\').dirty">\n      <p color="danger" ion-text [hidden]="!myForm.get(\'confirmacion\').hasError(\'required\')">Se requiere el campo</p>\n      <p color="danger" ion-text [hidden]="!myForm.get(\'confirmacion\').hasError(\'mayuscula\')">Este campo requiere\n        mínimo una MAYÚSCULA</p>\n      <p color="danger" ion-text [hidden]="!myForm.get(\'confirmacion\').hasError(\'numero\')">Este campo requiere mínimo\n        un numero</p>\n      <p color="danger" ion-text [hidden]="!myForm.get(\'confirmacion\').hasError(\'pattern\')">No coincide con el formato,\n        Mínimo 6 Caracteres</p>\n    </ion-item>\n    <div class="conditions">\n      <ion-checkbox name="agreement" formControlName="terminos">\n      </ion-checkbox>\n      <a href="{{terminos()}}">Acepto términos y condiciones.</a>\n    </div>\n\n    <div no-padding>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-end block (tap)="preRegistro()" *ngIf="!actualizar" style="background: #ed7425"\n              [disabled]="myForm.invalid">\n              Registrarse\n              <ion-icon name="ios-filing-outline"></ion-icon>\n            </button>\n            <button ion-button icon-end block (tap)="doActualizar()" *ngIf="actualizar" style="background: #ed7425"\n              [disabled]="myForm.invalid ">\n              Actualizar\n              <ion-icon name="ios-filing-outline"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_0__validators_validacionesAsincronas__["a" /* validacionesAsincronas */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validaciones; });
var validaciones = /** @class */ (function () {
    function validaciones() {
    }
    validaciones.buscarMayuscula = function (control) {
        var value = control.value;
        if (value) {
            var mayuscula = false;
            for (var index = 0; index < value.length; index++) {
                var letraActual = value.charAt(index);
                if (letraActual === letraActual.toUpperCase() && !letraActual.match(/^([0-9])*$/)) {
                    //console.log("La letra " + letraActual + " es mayúscula");
                    mayuscula = true;
                }
            }
            if (!mayuscula) {
                return {
                    'mayuscula': true
                };
            }
        }
        return null;
    };
    validaciones.buscarNumeros = function (control) {
        var value = control.value;
        if (value) {
            var numero = false;
            for (var index = 0; index < value.length; index++) {
                var letraActual = value.charAt(index);
                if (letraActual.match(/^([0-9])*$/)) {
                    //console.log("La letra " + letraActual + " es numero");
                    numero = true;
                }
            }
            if (!numero) {
                return {
                    'numero': true
                };
            }
        }
        return null;
    };
    return validaciones;
}());

//# sourceMappingURL=validaciones.js.map

/***/ })

});
//# sourceMappingURL=0.js.map