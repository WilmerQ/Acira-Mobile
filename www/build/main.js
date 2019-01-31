webpackJsonp([9],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperacionesHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_conexion__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the OperacionesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OperacionesHttpProvider = /** @class */ (function () {
    function OperacionesHttpProvider(http) {
        this.http = http;
        this.Conexion = new __WEBPACK_IMPORTED_MODULE_2__models_conexion__["a" /* conexion */]();
        this.tiempoDeEspera = 25;
        //console.log('Hello OperacionesHttpProvider Provider');
    }
    OperacionesHttpProvider.prototype.login = function (temp) {
        //console.log("aqui en el provider de operaciones - login");
        var url = this.Conexion.urlWebServices + "usuario/";
        //console.log("json " + url.concat(JSON.stringify(temp)));
        return this.http.get(url.concat(JSON.stringify(temp)))
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.registro = function (temp) {
        //console.log("aqui en el provider de operaciones - registro");
        var url = this.Conexion.urlWebServices + "usuario/registrar/" + JSON.stringify(temp);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.actualizar = function (usuario) {
        //console.log("aqui en el provider de operaciones - actualizar");
        var header1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header1.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.Conexion.urlWebServices + "usuario/actualizar", JSON.stringify(usuario), { headers: header1 })
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.enviarpanico = function (usuario, mensaje, ubicacion, anonimato, uuid, uuidAudio) {
        //console.log("aqui en el provider de operaciones - enviarpanico");
        var url = this.Conexion.urlWebServices + "eventos/panico/"
            + JSON.stringify(usuario) + "/" + JSON.stringify(mensaje) + "/" + JSON.stringify(ubicacion)
            + "/" + JSON.stringify(anonimato) + "/" + JSON.stringify(uuid) + "/" + JSON.stringify(uuidAudio);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.enviarSospecha = function (usuario, mensaje, ubicacion, anonimato, uuid, uuidAudio) {
        //console.log("aqui en el provider de operaciones - enviarpanico");
        var url = this.Conexion.urlWebServices + "eventos/sospecha/"
            + JSON.stringify(usuario) + "/" + JSON.stringify(mensaje) + "/" + JSON.stringify(ubicacion)
            + "/" + JSON.stringify(anonimato) + "/" + JSON.stringify(uuid) + "/" + JSON.stringify(uuidAudio);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.registrarDispositivoFCM = function (usuario, token, idDispositivo) {
        //console.log("aqui en el provider de operaciones - registrarDispositivoFCM");
        var url = this.Conexion.urlWebServices + "dispositivos/registrardispositivo/"
            + JSON.stringify(usuario) + "/" + JSON.stringify(token) + "/" + JSON.stringify(idDispositivo);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.getHistorialXtipoEvento = function (tipo, ident) {
        //console.log("aqui en el provider de operaciones - getHistorialXtipoEvento");
        var url = this.Conexion.urlWebServices + "historico/" + JSON.stringify(tipo) + "/" + JSON.stringify(ident);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.validarCamposRegistro = function (parametro, dato) {
        var url = this.Conexion.urlWebServices + "validaciones/" + JSON.stringify(parametro) + "/" + JSON.stringify(dato);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .first()
            .toPromise();
    };
    OperacionesHttpProvider.prototype.getCiudadesActivas = function () {
        //console.log("aqui en el provider de operaciones - getHistorialXtipoEvento");
        var url = this.Conexion.urlWebServices + "validaciones/ciudades";
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.getBarriosActivos = function (nombre) {
        //console.log("aqui en el provider de operaciones - getHistorialXtipoEvento");
        var url = this.Conexion.urlWebServices + "validaciones/barrios/" + JSON.stringify(nombre);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.crearCodigoSeguridad = function (documento, nombre, ciudad, barrio, direccion) {
        var url = this.Conexion.urlWebServices + "CodigoFamiliar/" + documento + "/"
            + JSON.stringify(nombre) + "/"
            + JSON.stringify(ciudad) + "/"
            + JSON.stringify(barrio) + "/"
            + JSON.stringify(direccion);
        //console.log("url completa: " + url);
        return this.http.get(url)
            .timeout(1000 * this.tiempoDeEspera)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OperacionesHttpProvider.prototype.metodoOmar = function () {
        var header1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        /*header1.append('Access-Control-Allow-Origin', '*');
        header1.append('Access-Control-Allow-headers', 'Origin,x-requested-with,Content-type');
        header1.append('Cache-Control', 'no-cache');*/
        header1.append("Access-Control-Allow-Origin", "*");
        header1.append("Access-Control-Allow-headers", "Origin,x-requested-with,Content-type,Accept");
        header1.append("Cache-Control", "no-cache");
        // header1.append('Access-Control-Allow-Origin', 'http://www.serverpdp.com/');
        //header1.append('Access-Control-Allow-Origin', 'http://www.serverpdp.com/');
        //console.log("aqui en el provider de operaciones - login");
        var url = "http://www.serverpdp.com/expomaquina/access_app/consultar.php?num=104";
        //console.log("json " + url.concat(JSON.stringify(temp)));
        return this.http.get(url, { headers: header1 })
            //.timeout(1000 * this.tiempoDeEspera)
            //.map(res => res.json())
            .toPromise();
    };
    OperacionesHttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OperacionesHttpProvider);
    return OperacionesHttpProvider;
}());

//# sourceMappingURL=operaciones-http.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/historial/historial.module": [
		711,
		8
	],
	"../pages/login/login.module": [
		710,
		2
	],
	"../pages/maphistorial/maphistorial.module": [
		712,
		7
	],
	"../pages/modalyoutube/modalyoutube.module": [
		713,
		6
	],
	"../pages/notificacion/notificacion.module": [
		715,
		5
	],
	"../pages/popover/popover.module": [
		714,
		4
	],
	"../pages/principal/principal.module": [
		717,
		1
	],
	"../pages/registro/registro.module": [
		716,
		0
	],
	"../pages/tabs/tabs.module": [
		718,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperacionesLocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the OperacionesLocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OperacionesLocalStorageProvider = /** @class */ (function () {
    function OperacionesLocalStorageProvider() {
    }
    OperacionesLocalStorageProvider.prototype.guardar = function (key, content) {
        window.localStorage.setItem(key, content);
    };
    OperacionesLocalStorageProvider.prototype.getObject = function (key) {
        return window.localStorage.getItem(key);
    };
    OperacionesLocalStorageProvider.prototype.guardarObjeto = function (key, object) {
        var temp = JSON.stringify(object);
        window.localStorage.setItem(key, temp);
    };
    OperacionesLocalStorageProvider.prototype.delete = function (key) {
        window.localStorage.removeItem(key);
    };
    OperacionesLocalStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OperacionesLocalStorageProvider);
    return OperacionesLocalStorageProvider;
}());

//# sourceMappingURL=operaciones-local-storage.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return conexion; });
var conexion = /** @class */ (function () {
    function conexion() {
        // ------------------configuracion local
        //ip: string = "181.143.200.174";
        //port: string = "9393";
        //ip: string = "186.1.186.158";
        //port: string = "8080"
        //------------configuracion casa
        //ip: string = "10.10.10.103"
        //port: string = "9393"
        //-----------------configuracion global
        this.ip = "acira.ddns.net";
        this.port = "80";
        this.urlWebServices = "http://" + this.ip + ":" + this.port + "/Acira/webresources/";
        this.urlServletImagen = "http://" + this.ip + ":" + this.port + "/Acira/ImagenEventos?id=";
        this.urlServletAudio = "http://" + this.ip + ":" + this.port + "/Acira/AudioEventos?id=";
    }
    return conexion;
}());

//# sourceMappingURL=conexion.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validacionesAsincronas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_http_operaciones_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_raven_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var validacionesAsincronas = /** @class */ (function () {
    function validacionesAsincronas(operacionesHttp) {
        this.operacionesHttp = operacionesHttp;
    }
    validacionesAsincronas.prototype.validarNombreUsuario = function (control) {
        console.log("aqui validando usuario");
        return this.operacionesHttp.validarCamposRegistro("nombreUsuario", control.value)
            .then(function (res) {
            if (res.ok) {
                return null;
            }
        })
            .catch(function (error) {
            if (error._body == "existe") {
                return { 'nombreUsuarioInUse': true };
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_raven_js__["captureException"](error);
                return null;
            }
        });
    };
    /*validarNombreUsuario(control: FormControl): any {
        clearTimeout(this.timeoutNombreUsuario);
        return new Promise(resolve => {
            this.timeoutNombreUsuario = setTimeout(() => {
                this.operacionesHttp.validarCamposRegistro("nombreUsuario", control.value).subscribe((res) => {
                    if (res.ok) {
                        resolve(null);
                    }
                }, (err) => {
                    if (err._body == "existe") {
                        console.log();
                        resolve({ 'nombreUsuarioInUse': true });
                    } else {
                        resolve(null);
                    }
                });
            }, 3000);
        });
    }*/
    validacionesAsincronas.prototype.validarNumeroIdentificacion = function (control) {
        return this.operacionesHttp.validarCamposRegistro("numeroIdentificacion", control.value)
            .then(function (res) {
            if (res.ok) {
                return null;
            }
        })
            .catch(function (error) {
            if (error._body == "existe") {
                console.log();
                return { 'identificacionInUse': true };
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_raven_js__["captureException"](error);
                return null;
            }
        });
    };
    validacionesAsincronas.prototype.validarTelefono = function (control) {
        return this.operacionesHttp.validarCamposRegistro("telefono", control.value)
            .then(function (res) {
            if (res.ok) {
                return null;
            }
        })
            .catch(function (error) {
            if (error._body == "existe") {
                console.log();
                return { 'telefonoInUse': true };
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_raven_js__["captureException"](error);
                return null;
            }
        });
    };
    validacionesAsincronas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */]])
    ], validacionesAsincronas);
    return validacionesAsincronas;
}());

//# sourceMappingURL=validacionesAsincronas.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RavenErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_locales_operaciones_locales__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_operaciones_http_operaciones_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_transfer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_path__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_media__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__validators_validacionesAsincronas__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























__WEBPACK_IMPORTED_MODULE_23_raven_js__["config"]('https://5777f217f2a84f01bb42aba3a6b9ed4b@sentry.io/1225966')
    .install();
var RavenErrorHandler = /** @class */ (function () {
    function RavenErrorHandler() {
    }
    RavenErrorHandler.prototype.handleError = function (err) {
        __WEBPACK_IMPORTED_MODULE_23_raven_js__["captureException"](err);
    };
    return RavenErrorHandler;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maphistorial/maphistorial.module#MaphistorialPageModule', name: 'MaphistorialPage', segment: 'maphistorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalyoutube/modalyoutube.module#ModalyoutubePageModule', name: 'ModalyoutubePage', segment: 'modalyoutube', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacion/notificacion.module#NotificacionPageModule', name: 'NotificacionPage', segment: 'notificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                //{ provide: ErrorHandler, useClass: RavenErrorHandler },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_locales_operaciones_locales__["a" /* OperacionesLocalesProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_21__validators_validacionesAsincronas__["a" /* validacionesAsincronas */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_social_sharing__["a" /* SocialSharing */]
                //BarcodeScanner
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperacionesLocalesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_PosicionGps__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OperacionesLocalesProvider = /** @class */ (function () {
    function OperacionesLocalesProvider(geolocation, loadingCtrl) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.posicionGps = null;
        console.log('Hello OperacionesLocalesProvider Provider');
    }
    OperacionesLocalesProvider.prototype.locateGpsPosition = function (mapElement, loaderMap, map, mostrarLoader, callback) {
        if (this.posicionGps == null) {
            var self_1 = this;
            if (mostrarLoader) {
                loaderMap = this.loadingCtrl.create({
                    content: "Cargando mapa...",
                    duration: 10000
                });
                loaderMap.present();
            }
            this.geolocation.getCurrentPosition().then(function (position) {
                var x = position.coords.latitude;
                var y = position.coords.longitude;
                self_1.posicionGps = new __WEBPACK_IMPORTED_MODULE_0__models_PosicionGps__["a" /* PosicionGps */]();
                self_1.posicionGps.latitud = position.coords.latitude;
                self_1.posicionGps.longitud = position.coords.longitude;
                self_1.posicionGps.altura = position.coords.altitude;
                self_1.posicionGps.watching = false;
                console.log("primera posicion (" + x + "," + y + ")");
                self_1.mostrarPrimerMapa(mapElement, loaderMap, map, x, y, mostrarLoader, callback);
            });
        }
        else {
            this.mostrarPrimerMapa(mapElement, loaderMap, map, this.posicionGps.latitud, this.posicionGps.longitud, mostrarLoader, callback);
        }
    };
    OperacionesLocalesProvider.prototype.mostrarPrimerMapa = function (mapElement, loaderMap, map, latitud, longitud, mostrarLoader, callback) {
        var latLng = new google.maps.LatLng(latitud, longitud);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            'myLocationButton': true,
            streetViewControl: false,
        };
        map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        google.maps.event.addListener(map, 'tilesloaded', function () {
            if (loaderMap != null && mostrarLoader) {
                loaderMap.dismiss();
                console.log("ejecutando dismiss");
            }
            if (callback != null) {
                console.log("callback!=null");
                callback(map);
            }
        });
        var img = "assets/icon/bluecircle.png";
        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: map.getCenter(),
            icon: img
        });
        var self = this;
        this.geolocation.watchPosition().subscribe(function (position) {
            var x = position.coords.latitude;
            var y = position.coords.longitude;
            self.posicionGps = new __WEBPACK_IMPORTED_MODULE_0__models_PosicionGps__["a" /* PosicionGps */]();
            self.posicionGps.latitud = position.coords.latitude;
            self.posicionGps.longitud = position.coords.longitude;
            self.posicionGps.altura = position.coords.altitude;
            self.posicionGps.watching = true;
            var latLng = new google.maps.LatLng(x, y);
            marker.setPosition(latLng);
            map.setCenter(latLng);
        });
    };
    OperacionesLocalesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */]])
    ], OperacionesLocalesProvider);
    return OperacionesLocalesProvider;
}());

//# sourceMappingURL=operaciones-locales.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosicionGps; });
var PosicionGps = /** @class */ (function () {
    function PosicionGps() {
    }
    return PosicionGps;
}());

//# sourceMappingURL=PosicionGps.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // console.log('Width: ' + platform.width());
            //  console.log('Height: ' + platform.height());
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            //(<any>window).go();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map