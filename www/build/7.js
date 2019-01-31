webpackJsonp([7],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaphistorialPageModule", function() { return MaphistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maphistorial__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaphistorialPageModule = /** @class */ (function () {
    function MaphistorialPageModule() {
    }
    MaphistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maphistorial__["a" /* MaphistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maphistorial__["a" /* MaphistorialPage */]),
            ],
        })
    ], MaphistorialPageModule);
    return MaphistorialPageModule;
}());

//# sourceMappingURL=maphistorial.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaphistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_conexion__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_media__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_raven_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MaphistorialPage = /** @class */ (function () {
    function MaphistorialPage(navCtrl, navParams, geolocation, diagnostico, loadingController, popoverCtrl, transfer, file, media, platform, imageViewerCtrl, localstorage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.diagnostico = diagnostico;
        this.loadingController = loadingController;
        this.popoverCtrl = popoverCtrl;
        this.transfer = transfer;
        this.file = file;
        this.media = media;
        this.platform = platform;
        this.imageViewerCtrl = imageViewerCtrl;
        this.localstorage = localstorage;
        this.alertCtrl = alertCtrl;
        this.polylineExistente = false;
        this.objetoHistorial = null;
        this.bounds = new google.maps.LatLngBounds();
        this.contador = 1;
        this.rutaExistente = false;
        this.directionsService = null;
        this.directionsDisplay = null;
        this.aux = true;
        this.duracion = "Solo disponible con ruta de automóvil habilitada";
        this.distancia = "Solo disponible con ruta de automóvil habilitada";
        this.buttonFabImagen = false;
        this.audioDisponible = false;
        this.reproduciendoAudio = false;
        this.changeLocationState = function (isAvailable) {
            // console.log("mapHistorial cambio de estado de ubicacion: " + isAvailable);
            _this.diagnostico.isLocationEnabled()
                .then(function (state) {
                //  console.log("state isLocationEnabled" + state);
                if (state) {
                    _this.loading.dismiss();
                    _this.polylineExistente = false;
                    _this.aux = true;
                    _this.rutaExistente = false;
                    _this.contador = 1;
                    _this.ionViewDidLoad();
                }
                else {
                    _this.loading = _this.loadingController.create({
                        spinner: 'ios',
                        content: 'Por favor encienda la ubicación en su dispositivo',
                        dismissOnPageChange: true
                    });
                    _this.loading.present();
                }
            }).catch(function (e) { return __WEBPACK_IMPORTED_MODULE_12_raven_js__["captureException"](e); });
        };
        this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Por favor encienda la ubicación en su dispositivo',
            dismissOnPageChange: true
        });
        this.objetoHistorial = navParams.get("objeto");
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
    MaphistorialPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.diagnostico.isLocationEnabled()
            .then(function (state) {
            if (state) {
                _this.loading.dismiss();
                _this.ionViewDidLoad();
            }
            else {
                _this.loading.present();
            }
        }).catch(function (e) { return __WEBPACK_IMPORTED_MODULE_12_raven_js__["captureException"](e); });
        this.diagnostico.registerLocationStateChangeHandler(this.changeLocationState);
    };
    MaphistorialPage.prototype.ionViewDidLoad = function () {
        if (this.objetoHistorial != null) {
            if (this.objetoHistorial.uuidImagen != null) {
                this.buttonFabImagen = true;
            }
            if (this.objetoHistorial.uuidAudio != null) {
                this.downloadAudio();
            }
            var temp = void 0;
            this.loadMap(temp);
        }
    };
    MaphistorialPage.prototype.ionViewWillLeave = function () {
        this.rutaAuto = false;
        this.rutaDirecta = false;
    };
    MaphistorialPage.prototype.presentPopover = function (myEvent) {
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
            _this.ionViewDidLoad();
        });
        popover.present({
            ev: myEvent
        });
    };
    MaphistorialPage.prototype.loadMap = function (position) {
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
        var marker = new google.maps.Marker({
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
                marker.setPosition(latLng);
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
                    else if (_this.polylineExistente) {
                        _this.flightPath.setMap(null);
                    }
                    var PlanCoordinates = [
                        _this.ubicacionActual,
                        { lat: _this.objetoHistorial.latitud, lng: _this.objetoHistorial.longitud }
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
                    if (_this.contador == 800 || _this.contador == 10) {
                        _this.contador = 11;
                        _this.directionsDisplay.setMap(_this.map);
                        _this.directionsService.route({
                            origin: new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude),
                            destination: new google.maps.LatLng(_this.objetoHistorial.latitud, _this.objetoHistorial.longitud),
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
                position: { lat: _this.objetoHistorial.latitud, lng: _this.objetoHistorial.longitud },
                map: _this.map,
                icon: img1,
                title: 'Evento reportado aquí'
            });
            var infowindow = new google.maps.InfoWindow({
                content: 'Evento reportado aquí',
                position: { lat: _this.objetoHistorial.latitud, lng: _this.objetoHistorial.longitud }
            });
            cityCircle.addListener('click', function () {
                infowindow.open(this.map);
            });
            attachSecretMessage(marker, marker.title);
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
    MaphistorialPage.prototype.informacion = function () {
        var confirm = this.alertCtrl.create({
            title: this.objetoHistorial.tipo,
            message: "Se recibe el reporte de " + this.objetoHistorial.tipo + ". <br> Por: " + this.objetoHistorial.usuarioInformante +
                "<br> Fecha:" + this.objetoHistorial.fechaRecolecion + "<br>" + this.objetoHistorial.mensaje +
                "<br> Preste atención y tenga cuidado." +
                " <br><br><strong>-El punto azul en el mapa es su ubicacion actual."
                + "<br>-El circulo rojo es la zona donde se reporto el evento.<strong>"
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
    MaphistorialPage.prototype.presentImage = function (myImage) {
        var temp = {
            enableBackdropDismiss: true
        };
        var imageViewer = this._imageViewerCtrl.create(myImage, temp);
        imageViewer.present();
        //setTimeout(() => imageViewer.dismiss(), 1000);
        //imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
    };
    MaphistorialPage.prototype.urlImagen = function () {
        var url = "http://via.placeholder.com/150?text=code+trigger";
        this.con = new __WEBPACK_IMPORTED_MODULE_7__models_conexion__["a" /* conexion */]();
        if (this.con != null && this.objetoHistorial != null) {
            url = this.con.urlServletImagen + this.objetoHistorial.uuidImagen;
        }
        // console.log("******************************************************url imagen " + url);
        return url;
    };
    MaphistorialPage.prototype.downloadAudio = function () {
        var _this = this;
        var url = this.con.urlServletAudio + this.objetoHistorial.uuidAudio;
        var fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.dataDirectory + "voz.3gp").then(function (entry) {
            //console.log('download complete: ' + entry.toURL());
            _this.audioDisponible = true;
        }, function (error) {
            // handle error
        });
    };
    MaphistorialPage.prototype.playAudio = function () {
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
    MaphistorialPage.prototype.stopAudio = function () {
        this.audio.pause();
        this.reproduciendoAudio = false;
    };
    MaphistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-maphistorial',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\maphistorial\maphistorial.html"*/'<!--\n  Generated template for the MaphistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title mode="ios" (click)="informacion()">\n      <ion-icon name="ios-information-circle-outline"></ion-icon>\n      Información Aquí\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map"></div>\n\n  <img [src]="urlImagen()" #myImage/>\n\n  <ion-fab no-padding no-margin right bottom>\n    <ion-row no-padding no-margin>\n      <ion-col col-auto no-padding no-margin>\n        <button ion-fab mini no-padding no-margin large (click)="informacion()">\n          <ion-icon name="ios-information-circle-outline"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-auto no-padding no-margin *ngIf="buttonFabImagen">\n        <button ion-fab mini no-padding no-margin large (click)="presentImage(myImage)">\n          <ion-icon name="ios-image"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-auto no-padding no-margin *ngIf="audioDisponible">\n        <button ion-fab mini no-padding no-margin large (click)="playAudio()" *ngIf="!reproduciendoAudio">\n          <ion-icon name="ios-play"></ion-icon>\n        </button>\n        <button ion-fab mini no-padding no-margin large (click)="stopAudio()" *ngIf="reproduciendoAudio">\n          <ion-icon name="ios-pause"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\maphistorial\maphistorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], MaphistorialPage);
    return MaphistorialPage;
}());

//# sourceMappingURL=maphistorial.js.map

/***/ })

});
//# sourceMappingURL=7.js.map