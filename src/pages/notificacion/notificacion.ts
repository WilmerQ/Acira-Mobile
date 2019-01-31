import { conexion } from './../../models/conexion';
import { OperacionesLocalStorageProvider } from './../../providers/operaciones-local-storage/operaciones-local-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, PopoverController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition, GeolocationOptions } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ImageViewerController } from 'ionic-img-viewer';
import { ImageViewerOptions } from 'ionic-img-viewer/dist/es2015/src/image-viewer';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { MediaObject, Media } from '@ionic-native/media';
import * as Raven from 'raven-js';
declare var google;

/**
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificacion',
  templateUrl: 'notificacion.html',
})
export class NotificacionPage {

  map: any;
  objeto: any;
  ubicacionActual: any;
  polylineExistente: Boolean = false;
  bounds = new google.maps.LatLngBounds();
  flightPath: any;
  marker: any;
  rutaDirecta: boolean;
  rutaAuto: boolean;
  contador: number = 1;
  rutaExistente: Boolean = false;
  directionsService: any = null;
  directionsDisplay: any = null;
  imagenVisible: boolean = false;
  aux: boolean = true;
  duracion: string = "Solo disponible con ruta de automóvil habilitada";
  distancia: string = "Solo disponible con ruta de automóvil habilitada";
  con: conexion;
  _imageViewerCtrl: ImageViewerController;
  buttonFabImagen: boolean = false;
  audioDisponible: boolean = false;
  filePath: string;
  audio: MediaObject;
  reproduciendoAudio: boolean = false;

  changeLocationState = (isAvailable) => {
    //console.log("cambio de estado de ubicacion: " + isAvailable);
    this.diagnostico.isLocationEnabled()
      .then((state) => {
        if (state) {
          this.loading.dismiss();
          this.polylineExistente = false;
          this.contador = 1;
          this.aux = true;
          this.rutaExistente = false;
          this.carga();
        } else {
          this.loading = this.loadingController.create({
            spinner: 'ios',
            content: 'Por favor encienda la ubicación en su dispositivo',
            dismissOnPageChange: true
          });
          this.loading.present();
        }
      }).catch(e => Raven.captureException(e));
  }

  loading = this.loadingController.create({
    spinner: 'ios',
    content: 'Por favor encienda la ubicación en su dispositivo',
    dismissOnPageChange: true
  });

  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private diagnostico: Diagnostic,
    public localstorage: OperacionesLocalStorageProvider,
    public loadingController: LoadingController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public imageViewerCtrl: ImageViewerController,
    private file: File,
    private media: Media,
    public platform: Platform,
    private transfer: Transfer,
    public navParams: NavParams) {
    let temp: string = localstorage.getObject("rutadirecta");
    if (temp.indexOf("true") >= 0) {
      this.rutaDirecta = true;
    } else {
      this.rutaDirecta = false;
    }
    temp = localstorage.getObject("rutaauto");
    if (temp.indexOf("true") >= 0) {
      this.rutaAuto = true;
    } else {
      this.rutaAuto = false;
    }
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidEnter() {
    this.diagnostico.isLocationEnabled()
      .then((state) => {
        if (state) {
          this.loading.dismiss();
          this.carga();
        } else {
          this.loading.present()
        }
      }).catch(e => Raven.captureException(e));
    this.diagnostico.registerLocationStateChangeHandler(this.changeLocationState);
  }

  carga() {
    this.objeto = this.navParams.get("notificacion");
    if (this.objeto != null) {
      this.localstorage.delete("notificacion1");

      if (this.objeto.additionalData.panico.uuidImagen != null) {
        this.buttonFabImagen = true;
      }

      if (this.objeto.additionalData.panico.uuidAudio != null) {
        this.downloadAudio();
      }

      let temp: Geoposition;
      this.loadMap(temp);
    }
  }

  ionViewWillLeave() {
    //console.log('ionViewWillLeave maphistorial');
    this.rutaAuto = false;
    this.rutaDirecta = false;
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("PopoverPage", { tipo: "mapa" });
    popover.onDidDismiss(() => {
      this.polylineExistente = false;
      this.rutaExistente = false;
      this.aux = true;
      let temp: string = this.localstorage.getObject("rutadirecta");
      if (temp.indexOf("true") >= 0) {
        this.rutaDirecta = true;
      } else {
        this.rutaDirecta = false;
      }
      temp = this.localstorage.getObject("rutaauto");
      if (temp.indexOf("true") >= 0) {
        this.rutaAuto = true;
      } else {
        this.rutaAuto = false;
      }
      this.contador = 1;
      this.carga();
    });
    popover.present({
      ev: myEvent
    });
  }

  loadMap(position: Geoposition) {
    let latitude;
    let longitude;
    if (position === undefined) {
      latitude = 11.234722;
      longitude = -74.18995;
    } else {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    }
    // console.log("loadmap" + latitude + " -- " + longitude);
    let mapEle: HTMLElement = document.getElementById('map');

    let myLatLng = { lat: latitude, lng: longitude };

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

    let img = "assets/icon/bluecircle.png";
    this.marker = new google.maps.Marker({
      map: this.map,
      icon: img,
      title: 'Tu ubicación actual'
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let options: GeolocationOptions = {
        enableHighAccuracy: true,
        maximumAge: 0
      };

      this.geolocation.watchPosition(options)
        .filter((p) => p.coords !== undefined)
        .subscribe(position1 => {
          let latLng = new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude);
          this.ubicacionActual = new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude);

          this.marker.setPosition(latLng);
          this.bounds.extend(latLng);
          this.bounds.extend(cityCircle.getPosition());

          if (!(this.rutaDirecta) && !(this.rutaAuto) && (this.aux)) {
            this.map.fitBounds(this.bounds);
            this.aux = false;
          }

          if (this.rutaDirecta) {
            if (!this.polylineExistente) {
              this.map.fitBounds(this.bounds);
            } else {
              this.flightPath.setMap(null);
            }

            let PlanCoordinates = [
              this.ubicacionActual,
              { lat: this.objeto.additionalData.panico.latitud, lng: this.objeto.additionalData.panico.longitud }
            ];
            this.flightPath = new google.maps.Polyline({
              path: PlanCoordinates,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2
            });

            this.flightPath.setMap(this.map);
            this.polylineExistente = true;
          }

          if (this.rutaAuto) {
            //console.log("contador de ubicaciones " + this.contador);
            if (!this.rutaExistente) {
              this.map.fitBounds(this.bounds);
            }

            if (this.contador == 500 || this.contador == 10) {
              this.contador = 11;
              this.directionsDisplay.setMap(this.map);
              this.directionsService.route({
                origin: new google.maps.LatLng(position1.coords.latitude, position1.coords.longitude),
                destination: new google.maps.LatLng(this.objeto.additionalData.panico.latitud, this.objeto.additionalData.panico.longitud),
                travelMode: google.maps.TravelMode.DRIVING,
                avoidTolls: true
              }, (response, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  //console.log("aqui en ok de ruta auto " + response.routes[0].legs[0].distance.text);
                  this.distancia = response.routes[0].legs[0].distance.text;
                  //console.log("aqui en ok de ruta auto " + response.routes[0].legs[0].duration.text);
                  this.duracion = response.routes[0].legs[0].duration.text;
                  this.directionsDisplay.setDirections(response);
                  this.rutaExistente = true;
                } else {
                  alert('No se pudieron mostrar las indicaciones debido a: ' + status);
                }
              });
            } else {
              this.contador = this.contador + 1;
            }
          }
        });

      let img1 = "assets/icon/cuidado.png";
      let cityCircle = new google.maps.Marker({
        position: { lat: this.objeto.additionalData.panico.latitud, lng: this.objeto.additionalData.panico.longitud },
        map: this.map,
        icon: img1,
        title: 'Evento reportado aquí'
      });

      var infowindow = new google.maps.InfoWindow({
        content: 'Evento reportado aquí',
        position: { lat: this.objeto.additionalData.panico.latitud, lng: this.objeto.additionalData.panico.longitud }
      });

      cityCircle.addListener('click', function () {
        infowindow.open(this.map);
      });

      attachSecretMessage(this.marker, this.marker.title);
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
  }

  informacion() {
    //console.log("informacion");
    let confirm = this.alertCtrl.create({
      title: this.objeto.additionalData.panico.tipo,
      message: this.objeto.message + " <br><br><strong>-El punto azul en el mapa es su ubicacion actual."
        + " <br>-El circulo rojo es la zona donde se reporto el evento.<strong>"
        + "<br><br>-Duración:<strong> " + this.duracion
        + "<br>-Distancia:<strong> " + this.distancia,

      buttons: [{
        text: 'OK',
        handler: () => {
        }
      }]
    });
    confirm.present();
  }

  presentImage(myImage) {
    let temp: ImageViewerOptions = {
      enableBackdropDismiss: true
    }
    const imageViewer = this._imageViewerCtrl.create(myImage, temp);
    imageViewer.present();

    //setTimeout(() => imageViewer.dismiss(), 1000);
    //imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }

  urlImagen(): string {
    let url: string = "http://via.placeholder.com/150?text=code+trigger";
    this.con = new conexion();
    if (this.con != null && this.objeto != null) {
      url = this.con.urlServletImagen + this.objeto.additionalData.panico.uuidImagen;
    }
    // console.log("******************************************************url imagen " + url);
    return url;
  }

  downloadAudio() {
    let url = this.con.urlServletAudio + this.objeto.additionalData.panico.uuidAudio;
    let fileTransfer: TransferObject = this.transfer.create();
    fileTransfer.download(url, this.file.dataDirectory + "voz.3gp").then((entry) => {
      //console.log('download complete: ' + entry.toURL());
      this.audioDisponible = true;
    }, (error) => {
      // handle error
    });
  }

  playAudio() {
    if (this.platform.is('ios')) {
      this.filePath = this.file.dataDirectory + "voz.3gp";
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.dataDirectory + "voz.3gp";
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.9);
    this.reproduciendoAudio = true;
    this.audio.onStatusUpdate.subscribe(data => {
      console.log("aqui en el status del audio " + data);
      if (data == 4) {
        this.reproduciendoAudio = false;
      }
    });
  }

  stopAudio() {
    this.audio.pause();
    this.reproduciendoAudio = false;
  }
}
