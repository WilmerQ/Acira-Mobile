import { usuarioRegistro } from './../../models/usuarioRegistro';
import { objetoEventoHistorial } from './../../models/objetoEventoHistorial';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { OperacionesHttpProvider } from '../../providers/operaciones-http/operaciones-http';
import { Geolocation } from '@ionic-native/geolocation';
import { OperacionesLocalStorageProvider } from '../../providers/operaciones-local-storage/operaciones-local-storage';
import * as Raven from 'raven-js';
/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  tipoAux: string = null;
  tipo: string = null;
  loading = this.loadingController.create({
    spinner: 'ios',
    content: 'Descargando, Por favor espere',
  });
  panico: objetoEventoHistorial[] = null;
  map: any;
  shownGroup = null;
  identificacion: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public localStorage: OperacionesLocalStorageProvider,
    private httpProvider: OperacionesHttpProvider,
    public loadingController: LoadingController) {
    let temp: string = this.localStorage.getObject("usuarioLogin");
    let usuarioActivo: usuarioRegistro = JSON.parse(temp);
    this.identificacion = usuarioActivo.identificacion;
  }

  listChange() {
    this.loading = this.loadingController.create({
      spinner: 'ios',
      content: 'Descargando, Por favor espere',
    });
    this.loading.present();
    if (this.tipo != null) {
      this.tipoAux = this.tipo;
      this.httpProvider.getHistorialXtipoEvento(this.tipo, this.identificacion).then(data => {
        this.loading.dismiss();
        this.panico = data;
        /*for (let i: number = 0; i < this.panico.length; i++) {
          console.log("objeto " + this.panico[i].fechaRecolecion + " i " + i);
        }*/
      }).catch(error => {
        Raven.captureException(error);
        this.loading.dismiss();
      });
      this.tipo = null;
    }
  }

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

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  doRefresh(refresher) {
    if (this.tipoAux != null) {
      this.httpProvider.getHistorialXtipoEvento(this.tipoAux, this.identificacion).then(data => {
        this.panico = null;
        this.panico = data;
        refresher.complete();
      }).catch(error => {
        Raven.captureException(error);
        refresher.complete();
      });
    } else {
      //console.log("else aqui en tipoaux" + this.tipoAux);
      refresher.complete();
    }
  }

  enviarParametros(temp: objetoEventoHistorial) {
    if (temp != null) {
      this.navCtrl.push("MaphistorialPage", { objeto: temp });
    }
  }
}
