webpackJsonp([5],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionPageModule", function() { return NotificacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notificacion__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificacionPageModule = /** @class */ (function () {
    function NotificacionPageModule() {
    }
    NotificacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notificacion__["a" /* NotificacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notificacion__["a" /* NotificacionPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__notificacion__["a" /* NotificacionPage */],
            ]
        })
    ], NotificacionPageModule);
    return NotificacionPageModule;
}());

//# sourceMappingURL=notificacion.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_conexion__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_raven_js__);
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
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacionPage = /** @class */ (function () {
    function NotificacionPage(navCtrl, geolocation, diagnostico, localstorage, loadingController, popoverCtrl, alertCtrl, imageViewerCtrl, file, media, platform, transfer, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.diagnostico = diagnostico;
        this.localstorage = localstorage;
        this.loadingController = loadingController;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.imageViewerCtrl = imageViewerCtrl;
        this.file = file;
        this.media = media;
        this.platform = platform;
        this.transfer = transfer;
        this.navParams = navParams;
        this.polylineExistente = false;
        this.bounds = new google.maps.LatLngBounds();
        this.contador = 1;
        this.rutaExistente = false;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.imagenVisible = false;
        this.aux = true;
        this.duracion = "Solo disponible con ruta de automóvil habilitada";
        this.distancia = "Solo disponible con ruta de automóvil habilitada";
        this.buttonFabImagen = false;
        this.audioDisponible = false;
        this.reproduciendoAudio = false;
        this.changeLocationState = function (isAvailable) {
            //console.log("cambio de estado de ubicacion: " + isAvailable);
            _this.diagnostico.isLocationEnabled()
                .then(function (state) {
                if (state) {
                    _this.loading.dismiss();
                    _this.polylineExistente = false;
                    _this.contador = 1;
                    _this.aux = true;
                    _this.rutaExistente = false;
                    _this.carga();
                }
                else {
                    _this.loading = _this.loadingController.create({
                        spinner: 'ios',
                        content: 'Por favor encienda la ubicación en su dispositivo',
                        dismissOnPageChange: true
                    });
                    _this.loading.present();
                }
            }).catch(function (e) { return __WEBPACK_IMPORTED_MODULE_10_raven_js__["captureException"](e); });
        };
        this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Por favor encienda la ubicación en su dispositivo',
            dismissOnPageChange: true
        });
        var temp = localstorage.getObject("rutadirecta");
        if (temp.indexOf("true") >= 0) {
            this.rutaDirecta = true;
        }
        else {
            this.rutaDirecta = false;
        }
        temp = localstorage.getObject("rutaauto");
        if (temp.indexOf("true") >= 0) {
            this.rutaAuto = true;
        }
        else {
            this.rutaAuto = false;
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this._imageViewerCtrl = imageViewerCtrl;
    }
    NotificacionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.diagnostico.isLocationEnabled()
            .then(function (state) {
            if (state) {
                _this.loading.dismiss();
                _this.carga();
            }
            else {
                _this.loading.present();
            }
        }).catch(function (e) { return __WEBPACK_IMPORTED_MODULE_10_raven_js__["captureException"](e); });
        this.diagnostico.registerLocationStateChangeHandler(this.changeLocationState);
    };
    NotificacionPage.prototype.carga = function () {
        this.objeto = this.navParams.get("notificacion");
        if (this.objeto != null) {
            this.localstorage.delete("notificacion1");
            if (this.objeto.additionalData.panico.uuidImagen != null) {
                this.buttonFabImagen = true;
            }
            if (this.objeto.additionalData.panico.uuidAudio != null) {
                this.downloadAudio();
            }
            var temp = void 0;
            this.loadMap(temp);
        }
    };
    NotificacionPage.prototype.ionViewWillLeave = function () {
        //console.log('ionViewWillLeave maphistorial');
        this.rutaAuto = false;
        this.rutaDirecta = false;
    };
    NotificacionPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("PopoverPage", { tipo: "mapa" });
        popover.onDidDismiss(function () {
            _this.polylineExistente = false;
            _this.rutaExistente = false;
            _this.aux = true;
            var temp = _this.localstorage.getObject("rutadirecta");
            if (temp.indexOf("true") >= 0) {
                _this.rutaDirecta = true;
            }
            else {
                _this.rutaDirecta = false;
            }
            temp = _this.localstorage.getObject("rutaauto");
            if (temp.indexOf("true") >= 0) {
                _this.rutaAuto = true;
            }
            else {
                _this.rutaAuto = false;
            }
            _this.contador = 1;
            _this.carga();
        });
        popover.present({
            ev: myEvent
        });
    };
    NotificacionPage.prototype.loadMap = function (position) {
        var _this = this;
        var latitude;
        var longitude;
        if (position === undefined) {
            latitude = 11.234722;
            longitude = -74.18995;
        }
        else {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        }
        // console.log("loadmap" + latitude + " -- " + longitude);
        var mapEle = document.getElementById('map');
        var myLatLng = { lat: latitude, lng: longitude };
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 17,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.hybrid,
            myLocationButton: true,
            streetViewControl: false,
            zoomControl: false,
            maxZoom: 19,
        });
        var img = "assets/icon/bluecircle.png";
        this.marker = new google.maps.Marker({
            map: this.map,
            icon: img,
            title: 'Tu ubicación actual'
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 0
            };
            _this.geolocation.watchPosition(options)
                .filter(function (p) { return p.coords !== undefined; })
                .subscribe(function (position1) {
                var latLng = new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude);
                _this.ubicacionActual = new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude);
                _this.marker.setPosition(latLng);
                _this.bounds.extend(latLng);
                _this.bounds.extend(cityCircle.getPosition());
                if (!(_this.rutaDirecta) && !(_this.rutaAuto) && (_this.aux)) {
                    _this.map.fitBounds(_this.bounds);
                    _this.aux = false;
                }
                if (_this.rutaDirecta) {
                    if (!_this.polylineExistente) {
                        _this.map.fitBounds(_this.bounds);
                    }
                    else {
                        _this.flightPath.setMap(null);
                    }
                    var PlanCoordinates = [
                        _this.ubicacionActual,
                        { lat: _this.objeto.additionalData.panico.latitud, lng: _this.objeto.additionalData.panico.longitud }
                    ];
                    _this.flightPath = new google.maps.Polyline({
                        path: PlanCoordinates,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    _this.flightPath.setMap(_this.map);
                    _this.polylineExistente = true;
                }
                if (_this.rutaAuto) {
                    //console.log("contador de ubicaciones " + this.contador);
                    if (!_this.rutaExistente) {
                        _this.map.fitBounds(_this.bounds);
                    }
                    if (_this.contador == 500 || _this.contador == 10) {
                        _this.contador = 11;
                        _this.directionsDisplay.setMap(_this.map);
                        _this.directionsService.route({
                            origin: new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude),
                            destination: new google.maps.LatLng(_this.objeto.additionalData.panico.latitud, _this.objeto.additionalData.panico.longitud),
                            travelMode: google.maps.TravelMode.DRIVING,
                            avoidTolls: true
                        }, function (response, status) {
                            if (status === google.maps.DirectionsStatus.OK) {
                                //console.log("aqui en ok de ruta auto " + response.routes[0].legs[0].distance.text);
                                _this.distancia = response.routes[0].legs[0].distance.text;
                                //console.log("aqui en ok de ruta auto " + response.routes[0].legs[0].duration.text);
                                _this.duracion = response.routes[0].legs[0].duration.text;
                                _this.directionsDisplay.setDirections(response);
                                _this.rutaExistente = true;
                            }
                            else {
                                alert('No se pudieron mostrar las indicaciones debido a: ' + status);
                            }
                        });
                    }
                    else {
                        _this.contador = _this.contador + 1;
                    }
                }
            });
            var img1 = "assets/icon/cuidado.png";
            var cityCircle = new google.maps.Marker({
                position: { lat: _this.objeto.additionalData.panico.latitud, lng: _this.objeto.additionalData.panico.longitud },
                map: _this.map,
                icon: img1,
                title: 'Evento reportado aquí'
            });
            var infowindow = new google.maps.InfoWindow({
                content: 'Evento reportado aquí',
                position: { lat: _this.objeto.additionalData.panico.latitud, lng: _this.objeto.additionalData.panico.longitud }
            });
            cityCircle.addListener('click', function () {
                infowindow.open(this.map);
            });
            attachSecretMessage(_this.marker, _this.marker.title);
            mapEle.classList.add('show-map');
        });
        function attachSecretMessage(marker, secretMessage) {
            var infowindow = new google.maps.InfoWindow({
                content: secretMessage
            });
            marker.addListener('click', function () {
                infowindow.open(marker.get('map'), marker);
            });
        }
    };
    NotificacionPage.prototype.informacion = function () {
        //console.log("informacion");
        var confirm = this.alertCtrl.create({
            title: this.objeto.additionalData.panico.tipo,
            message: this.objeto.message + " <br><br><strong>-El punto azul en el mapa es su ubicacion actual."
                + " <br>-El circulo rojo es la zona donde se reporto el evento.<strong>"
                + "<br><br>-Duración:<strong> " + this.duracion
                + "<br>-Distancia:<strong> " + this.distancia,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                    }
                }]
        });
        confirm.present();
    };
    NotificacionPage.prototype.presentImage = function (myImage) {
        var temp = {
            enableBackdropDismiss: true
        };
        var imageViewer = this._imageViewerCtrl.create(myImage, temp);
        imageViewer.present();
        //setTimeout(() => imageViewer.dismiss(), 1000);
        //imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
    };
    NotificacionPage.prototype.urlImagen = function () {
        var url = "http://via.placeholder.com/150?text=code+trigger";
        this.con = new __WEBPACK_IMPORTED_MODULE_0__models_conexion__["a" /* conexion */]();
        if (this.con != null && this.objeto != null) {
            url = this.con.urlServletImagen + this.objeto.additionalData.panico.uuidImagen;
        }
        // console.log("******************************************************url imagen " + url);
        return url;
    };
    NotificacionPage.prototype.downloadAudio = function () {
        var _this = this;
        var url = this.con.urlServletAudio + this.objeto.additionalData.panico.uuidAudio;
        var fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.dataDirectory + "voz.3gp").then(function (entry) {
            //console.log('download complete: ' + entry.toURL());
            _this.audioDisponible = true;
        }, function (error) {
            // handle error
        });
    };
    NotificacionPage.prototype.playAudio = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            this.filePath = this.file.dataDirectory + "voz.3gp";
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.dataDirectory + "voz.3gp";
            this.audio = this.media.create(this.filePath);
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
    NotificacionPage.prototype.stopAudio = function () {
        this.audio.pause();
        this.reproduciendoAudio = false;
    };
    NotificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-notificacion',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\notificacion\notificacion.html"*/'<!--\n  Generated template for the NotificacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title mode="ios" (click)="informacion()">Información Aquí</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding no-margin>\n  <div id="map"></div>\n  <img [src]="urlImagen()" #myImage [hidden]="imagenVisible == true" />\n\n  <ion-fab no-padding no-margin class="Absolute-Center" bottom>\n    <ion-row no-padding no-margin>\n      <ion-col col-auto no-padding no-margin>\n        <button ion-fab mini no-padding no-margin large (click)="informacion()">\n          <ion-icon name="ios-information-circle-outline"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-auto no-padding no-margin *ngIf="buttonFabImagen">\n        <button ion-fab mini no-padding no-margin large (click)="presentImage(myImage)">\n          <ion-icon name="ios-image"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-auto no-padding no-margin *ngIf="audioDisponible">\n        <button ion-fab mini no-padding no-margin large (click)="playAudio()" *ngIf="!reproduciendoAudio">\n          <ion-icon name="ios-play"></ion-icon>\n        </button>\n        <button ion-fab mini no-padding no-margin large (click)="stopAudio()" *ngIf="reproduciendoAudio">\n          <ion-icon name="ios-pause"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\notificacion\notificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */]])
    ], NotificacionPage);
    return NotificacionPage;
}());

//# sourceMappingURL=notificacion.js.map

/***/ })

});
//# sourceMappingURL=5.js.map