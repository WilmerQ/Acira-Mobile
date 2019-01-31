webpackJsonp([8],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistorialPageModule = /** @class */ (function () {
    function HistorialPageModule() {
    }
    HistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historial__["a" /* HistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historial__["a" /* HistorialPage */]),
            ],
        })
    ], HistorialPageModule);
    return HistorialPageModule;
}());

//# sourceMappingURL=historial.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_operaciones_http_operaciones_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_operaciones_local_storage_operaciones_local_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_raven_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_raven_js__);
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
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialPage = /** @class */ (function () {
    function HistorialPage(navCtrl, navParams, geolocation, localStorage, httpProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.localStorage = localStorage;
        this.httpProvider = httpProvider;
        this.loadingController = loadingController;
        this.tipoAux = null;
        this.tipo = null;
        this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Descargando, Por favor espere',
        });
        this.panico = null;
        this.shownGroup = null;
        var temp = this.localStorage.getObject("usuarioLogin");
        var usuarioActivo = JSON.parse(temp);
        this.identificacion = usuarioActivo.identificacion;
    }
    HistorialPage.prototype.listChange = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Descargando, Por favor espere',
        });
        this.loading.present();
        if (this.tipo != null) {
            this.tipoAux = this.tipo;
            this.httpProvider.getHistorialXtipoEvento(this.tipo, this.identificacion).then(function (data) {
                _this.loading.dismiss();
                _this.panico = data;
                /*for (let i: number = 0; i < this.panico.length; i++) {
                  console.log("objeto " + this.panico[i].fechaRecolecion + " i " + i);
                }*/
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_5_raven_js__["captureException"](error);
                _this.loading.dismiss();
            });
            this.tipo = null;
        }
    };
    /*mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };*/
    /*toggleGroup(group) {
      if (this.isGroupShown(group)) {
        this.shownGroup = null;
      } else {
        this.shownGroup = group;
        for (let i = 0; i < this.panico.length; i++) {
          var item = this.panico[i];
          // search for opened item in the array of items
          if (item.id == group) { // found item
            // make latitude-longitude element
            var myLatlng = new google.maps.LatLng(item.latitud, item.longitud);
  
            // make map-element
            this.map = null;
            this.map = new google.maps.Map(document.getElementById('map' + item.id), this.mapOptions);
            console.log("idmap " + item.id);
  
            // make marker-element
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: this.map
            });
  
            // resize map now
            google.maps.event.trigger(this.map, 'resize');
            this.map.setCenter(myLatlng);
            this.map.setZoom(this.map.getZoom());
  
            // resize map when map is idle.
            google.maps.event.addListenerOnce(this.map, 'idle', () => {
              //google.maps.event.addListenerOnce(map, 'idle', function () {
              console.log("map idled, resizing");
              google.maps.event.trigger(this.map, 'resize');
              this.map.setCenter(myLatlng);
              this.map.setZoom(this.map.getZoom());
            }); // shouldn't be making a function inside a loop but F it i'm trying everything,
            break;
          }
        }
        /*setTimeout(() => {
          console.log("timeout, resizing");
          google.maps.event.trigger(this.map, "resize");
          this.map.setCenter(myLatlng);
          this.map.setZoom(this.map.getZoom());
        }, 5000);*/
    /*}
  };*/
    HistorialPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    HistorialPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (this.tipoAux != null) {
            this.httpProvider.getHistorialXtipoEvento(this.tipoAux, this.identificacion).then(function (data) {
                _this.panico = null;
                _this.panico = data;
                refresher.complete();
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_5_raven_js__["captureException"](error);
                refresher.complete();
            });
        }
        else {
            //console.log("else aqui en tipoaux" + this.tipoAux);
            refresher.complete();
        }
    };
    HistorialPage.prototype.enviarParametros = function (temp) {
        if (temp != null) {
            this.navCtrl.push("MaphistorialPage", { objeto: temp });
        }
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historial',template:/*ion-inline-start:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\historial\historial.html"*/'<!--\n  Generated template for the HistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-padding>\n  <ion-navbar no-padding>\n    <ion-item>\n      <ion-label>Tipo de Evento</ion-label>\n      <ion-select interface="popover" (ionChange)="listChange()" [(ngModel)]="tipo">\n        <ion-option value="panico">Pánico</ion-option>\n        <ion-option value="sospecha">Sospecha</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list no-padding>\n    <ion-list-header *ngIf="panico != null && panico.length > 0 && panico[0].tipo == \'panico\'">\n      <h1 style="font-weight: bold; color: black; text-align: center; height: 100%">Pánico</h1>\n    </ion-list-header>\n    <ion-list-header *ngIf="panico != null && panico.length > 0 && panico[0].tipo == \'sospecha\'">\n      <h1 style="font-weight: bold; color: black; text-align: center; height: 100%">Sospecha</h1>\n    </ion-list-header>\n    <ion-item *ngFor="let d of panico; let i=index" text-wrap (click)="enviarParametros(d)" [ngClass]="{active: isGroupShown(i)}">\n      <h2> {{ d.usuarioInformante }}</h2>\n      <h4> {{ d.fechaRecolecion }}</h4>\n      <p> {{ d.mensaje }} </p>\n      <ion-icon color="success" item-right [name]="isGroupShown(i) ? null : \'arrow-dropright\'"></ion-icon>\n      <!--<ion-item class="item-accordion item-text-wrap" *ngIf="isGroupShown(i)">\n        <div class=\'parkmap\' id=\'map{{d.id}}\'></div>\n      </ion-item>-->\n    </ion-item>\n  </ion-list>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Tire para actualizar" refreshingSpinner="circles" refreshingText="Actualizando...">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>'/*ion-inline-end:"C:\Users\wilme\Google Drive\ACIRA\ACIRA V 1.0\ACIRA\src\pages\historial\historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_operaciones_local_storage_operaciones_local_storage__["a" /* OperacionesLocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_operaciones_http_operaciones_http__["a" /* OperacionesHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ })

});
//# sourceMappingURL=8.js.map