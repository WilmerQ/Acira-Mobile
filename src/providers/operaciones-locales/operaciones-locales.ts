import { PosicionGps } from './../../models/PosicionGps';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'

/*
  Generated class for the OperacionesLocalesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var google;

@Injectable()
export class OperacionesLocalesProvider {

  posicionGps: PosicionGps = null;


  constructor(public geolocation: Geolocation,
    private loadingCtrl: LoadingController) {
    console.log('Hello OperacionesLocalesProvider Provider');
  }

  locateGpsPosition(mapElement: any, loaderMap: any, map: any, mostrarLoader: boolean, callback: (any) => any) {
    if (this.posicionGps == null) {
      let self = this;
      if (mostrarLoader) {
        loaderMap = this.loadingCtrl.create({
          content: "Cargando mapa...",
          duration: 10000
        });
        loaderMap.present();
      }
      this.geolocation.getCurrentPosition().then((position) => {
        let x = position.coords.latitude;
        let y = position.coords.longitude;
        self.posicionGps = new PosicionGps();
        self.posicionGps.latitud = position.coords.latitude;
        self.posicionGps.longitud = position.coords.longitude;
        self.posicionGps.altura = position.coords.altitude;
        self.posicionGps.watching = false;
        console.log("primera posicion (" + x + "," + y + ")");
        self.mostrarPrimerMapa(mapElement, loaderMap, map, x, y, mostrarLoader, callback);
      });
    } else {
      this.mostrarPrimerMapa(mapElement, loaderMap, map,
        this.posicionGps.latitud, this.posicionGps.longitud, mostrarLoader, callback);
    }
  }

  mostrarPrimerMapa(mapElement: any, loaderMap: any, map: any,
    latitud: number, longitud: number, mostrarLoader: boolean, callback: (any) => any) {
    let latLng = new google.maps.LatLng(latitud, longitud);
    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      'myLocationButton': true, // GEOLOCATION BUTTON 
      streetViewControl: false,
    }

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

    let img = "assets/icon/bluecircle.png";
    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter(),
      icon: img
    });

    let self = this;
    this.geolocation.watchPosition().subscribe((position) => {
      let x = position.coords.latitude;
      let y = position.coords.longitude;

      self.posicionGps = new PosicionGps();
      self.posicionGps.latitud = position.coords.latitude;
      self.posicionGps.longitud = position.coords.longitude;
      self.posicionGps.altura = position.coords.altitude;
      self.posicionGps.watching = true;

      let latLng = new google.maps.LatLng(x, y);
      marker.setPosition(latLng);
      map.setCenter(latLng);
    });
  }

}
