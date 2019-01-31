import { OperacionesHttpProvider } from './../../providers/operaciones-http/operaciones-http';
import { OperacionesLocalStorageProvider } from './../../providers/operaciones-local-storage/operaciones-local-storage';
import { coordenadas } from './../../models/coordenadas';
import { usuarioRegistro } from './../../models/usuarioRegistro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ActionSheetController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Platform } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { conexion } from '../../models/conexion';
import { Media, MediaObject } from '@ionic-native/media';
import * as Raven from 'raven-js';
import uuid from 'uuid/v4';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  lastImage: any;
  mostrarImagen: boolean;
  pushObject: PushObject;
  minutoPenalizado: number = 5;
  usuarioActivo: usuarioRegistro;
  mensaje: string;
  anonimato: boolean = false;
  posicionActual: any = null;
  precision: number = null;
  onResumeSubscription: Subscription;
  uuidv4 = require('uuid/v4');
  uuid: string;
  uuidImagen: string;
  Conexion: conexion = new conexion();
  //audio
  recording: boolean = false;
  filePath2: string;
  fileName: string;
  audio: MediaObject;
  uuidGrabacionVoz: string;
  reproduciendoAudio: boolean = false;

  changeLocationState = (isAvailable) => {
    //console.log("cambio de estado de ubicacion: " + isAvailable);
    this.diagnostico.isLocationEnabled()
      .then((state) => {
        //console.log("state isLocationEnabled " + state);
        if (state) {
          //console.log("aqui en state positivo");
          this.ubicacion(true);
          this.loading.dismiss();
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

  cancelLocationState = (isAvailable) => {
    console.log("cambio de estado de ubicacion: " + isAvailable);
    return false;
  }
  loading = this.loadingController.create({
    spinner: 'ios',
    content: 'Por favor encienda la ubicación en su dispositivo',
    dismissOnPageChange: true
  });

  constructor(public navCtrl: NavController,
    public localstorage: OperacionesLocalStorageProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private geolocation: Geolocation,
    private diagnostico: Diagnostic,
    public loadingController: LoadingController,
    public toastCtl: ToastController,
    private operacionesLogin: OperacionesHttpProvider,
    private push: Push,
    public platform: Platform,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private transfer: Transfer,
    private file: File,
    private media: Media,
    private filePath: FilePath,
    private network: Network) {
    let rutaDirecta = localstorage.getObject("rutadirecta");
    let rutaauto = localstorage.getObject("rutaauto");
    if ((rutaDirecta == null) && (rutaauto == null)) {
      localstorage.guardarObjeto("rutadirecta", true);
      localstorage.guardarObjeto("rutaauto", false);
    }
    this.onResumeSubscription = platform.resume.subscribe(() => {
      //console.log("****************aqui entrando a la app")
      setTimeout(() => {
        this.magia();
      }, 500);
    });
  }

  ionViewDidEnter() {
    //console.log("*****************aqui en ionViewDidEnter");
    if (this.navParams.get("cerrarSesionOk") == "ok") {
      this.cerrarSesion();
    }
    this.diagnostico.isLocationEnabled()
      .then((state) => {
        if (state) {
          this.ubicacion(true);
          this.loading.dismiss();
        } else {
          this.loading.present()
        }
      }).catch(e => Raven.captureException(e));
    this.diagnostico.registerLocationStateChangeHandler(this.changeLocationState);
    setTimeout(() => {
      this.magia();
    }, 500);
  }

  ionViewDidLoad() {
    console.log("*****************aqui en ionViewDidLoad");
    this.notificacionPush();
  }

  ionViewCanEnter() {
    //console.log("*****************aqui en ionViewCanEnter");
    let temp: string = this.localstorage.getObject("usuarioLogin");
    this.usuarioActivo = JSON.parse(temp);
    if (this.usuarioActivo != null) {
      //console.log("usuario diferente a null");
      if (this.localstorage.getObject("rootPage") == null) {
        this.localstorage.guardar("rootPage", "principal")
      }
    }
  }

  ionViewWillEnter() {
    //console.log("*****************aqui en ionViewWillEnter");
  }

  ionViewWillUnload() {
    //console.log("*****************aqui en ionViewWillUnload principal page");
    this.onResumeSubscription.unsubscribe();
  }

  magia() {
    let temp: string = this.localstorage.getObject("notificacion1");
    if (temp != null) {
      if (temp.length > 1) {
        let temp2: any = JSON.parse(temp);
        //console.log("************************** despues " + temp2.title);
        if (temp != undefined) {
          this.navCtrl.push("NotificacionPage", { notificacion: temp2 });
        }
      }
    }
  }

  notificacionPush() {
    // to check if we have permission
    this.push.hasPermission().then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
      } else {
        console.log('We do not have permission to send push notifications');
      }
    });

    const options: PushOptions = {
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

    this.pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.comandosSecundarios.estado == "cierraSesion") {
        //console.log('Received a notification' + notification.additionalData.comandosSecundarios.estado);
        if (notification.additionalData.foreground) {
          let toast = this.toastCtl.create({
            message: 'Se ha detectado que se ha iniciado sesión en otro dispositivo diferente, si desea seguir utilizando la aplicación vuelva a iniciar sesión',
            position: 'middle',
            closeButtonText: 'ok',
            showCloseButton: true,
            dismissOnPageChange: false
          });
          toast.present();
        }
        notification = null;
        this.cerrarSesion();
      }

      if (notification.additionalData.foreground) {
        let confirm = this.alertCtrl.create({
          title: notification.title,
          message: notification.message,
          buttons: [
            {
              text: 'Ignorar',
              handler: () => {
              }
            },
            {
              text: 'Ver Mapa',
              handler: () => {
                //console.log('Agree clicked');
                //this.localstorage.guardarObjeto("notificacion", notification);
                this.navCtrl.push("NotificacionPage", { notificacion: notification });
              }
            }
          ]
        });
        confirm.present();
      } else {
        //this.localstorage.guardarObjeto("notificacion", notification);
        //this.navCtrl.setRoot("NotificacionPage");
      }
    });

    this.pushObject.on('registration').subscribe((registration: any) => {
      const registrationId = registration.registrationId;
      //console.log("obtener token" + registrationId)
      this.operacionesLogin.registrarDispositivoFCM(this.usuarioActivo, registrationId, this.localstorage.getObject("idDispositivo"))
        .then(data => {
          let toast = this.toastCtl.create({
            message: data.mensaje,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }).catch(error => {
          Raven.captureException(error);
          if (error._body === "cierraSesion") {
            let toast = this.toastCtl.create({
              message: 'Se ha detectado que se ha iniciado sesión en otro dispositivo diferente, si desea seguir utilizando la aplicación vuelva a iniciar sesión ',
              position: 'middle',
              closeButtonText: 'ok',
              showCloseButton: true,
              dismissOnPageChange: false
            });
            toast.present();
            this.cerrarSesion();
          } else if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación"
            || error._body === "Problema interno del servidor") {
            let toast = this.toastCtl.create({
              message: 'Por cuestiones de seguridad se debe iniciar sesión nuevamente.',
              position: 'middle',
              closeButtonText: 'ok',
              showCloseButton: true,
              dismissOnPageChange: false
            });
            toast.present();
            this.cerrarSesion();
          }
        })
    });

    (<any>window).approve = function (data: any) {
      console.log('approve called ----------------');
      console.log("aqui el json de data " + JSON.stringify(data));
      window.localStorage.setItem("notificacion1", JSON.stringify(data[0]));
    };

    (<any>window).reject = function (data: any) {
      console.log('Reject called ---------------------');
    }
    this.pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

  ubicacion(activada: Boolean) {
    let options: GeolocationOptions = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    const monitorUbicacion = this.geolocation.watchPosition(options)
      .filter((p) => p.coords !== undefined) //Filter Out Errors
      .subscribe(position => {
        this.precision = position.coords.accuracy;
        //console.log(position.coords.longitude + ' ' + position.coords.latitude + ' acua ' + position.coords.accuracy);
        if (position.coords.accuracy < 25) {
          this.posicionActual = position.coords;
        }
      });
    if (!activada) {
      //console.log("aquui en unsubscribe ");
      monitorUbicacion.unsubscribe();
    }
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '¿Desea cerrar sesión en este dispositivo?',
      message: 'Si cierra sesión no podrá recibir las notificaciones de reportes de otros usuarios',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            //console.log('Agree clicked');
            this.cerrarSesion();
          }
        }
      ]
    });
    confirm.present();
  }

  preconfirmarpanico() {
    let confirm = this.alertCtrl.create({
      title: '¿Reportar pánico?',
      message: 'A continuación, se activarán las sirenas de alta potencia, se recomienda realizar una descripción de voz o de texto sobre la situación.',
      buttons: [
        {
          text: 'NO',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'SI',
          handler: () => {
            //console.log('Agree clicked');
            this.doPanico();
          }
        }
      ]
    });
    confirm.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("PopoverPage", { tipo: "general" });
    popover.onDidDismiss((data) => {
      //console.log(data);
      if (data != null) {
        if (data == "cerrarSesion")
          this.showConfirm();
      }
    });
    popover.present({
      ev: myEvent
    });

  }

  cerrarSesion() {
    this.pushObject.unregister();
    this.localstorage.delete("rootPage");
    this.localstorage.delete("usuarioLogin");
    //this.navCtrl.setRoot("LoginPage");
    //this.navCtrl.popToRoot();
    this.navCtrl.setRoot("TabsPage", { objeto: "cerrarSesion" })
  }

  doPanico() {
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
    let temp: any = this.localstorage.getObject("fechaReporte");
    let fecha: number = temp;
    if (fecha == null) {
      if (this.posicionActual != null) {
        //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
        let coordenadasTemp = new coordenadas(this.posicionActual.accuracy,
          this.posicionActual.altitude,
          this.posicionActual.altitudeAccuracy,
          this.posicionActual.heading,
          this.posicionActual.latitude,
          this.posicionActual.longitude,
          this.posicionActual.speed);
        this.operacionesLogin.enviarpanico(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
          .then(data => {
            let fechaReporte: Date = new Date();
            //console.log("fecha del reporte " + fechaReporte.getTime());
            this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
            this.loading.dismiss();
            let toast = this.toastCtl.create({
              message: data.mensaje,
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            //this.lastImage = null;
            this.mostrarImagen = false;
            this.fileName = undefined;
            this.mensaje = "";
          }).catch(error => {
            Raven.captureException(error);
            this.loading.dismiss();
            if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
              error._body === "Intente nuevamente" ||
              error._body === "Problema interno del servidor") {
              let toast = this.toastCtl.create({
                message: error._body,
                duration: 3000,
                position: 'middle'
              });
              toast.present();
            } else {
              let toast = this.toastCtl.create({
                message: "Error desconocido, verifique su conexión a internet.",
                duration: 3000,
                position: 'middle'
              });
              toast.present();
            }
          })
      } else {
        //console.log('posicion actual null');
        this.loading.dismiss();
        let toast = this.toastCtl.create({
          message: 'La precisión de la ubicación mínima es de 25 metros y el GPS en este momento tiene una precisión ' + this.precision,
          position: 'middle',
          closeButtonText: 'ok',
          showCloseButton: true,
          dismissOnPageChange: false
        });
        toast.present();
      }
    } else {
      let fechaActual = new Date();
      let duracion: number = (fechaActual.getTime() - fecha);
      if (duracion < this.minutoPenalizado * 60 * 1000) {
        this.loading.dismiss();
        //console.log("penalizado por tiempo");
        let toast = this.toastCtl.create({
          message: "Usted ya ha reportado en los últimos 5 minutos, espere ese mínimo lapso de tiempo para volver a realizarlo ",
          duration: 4000,
          position: 'middle'
        });
        toast.present();
      } else {
        if (this.posicionActual != null) {
          //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
          let coordenadasTemp = new coordenadas(this.posicionActual.accuracy,
            this.posicionActual.altitude,
            this.posicionActual.altitudeAccuracy,
            this.posicionActual.heading,
            this.posicionActual.latitude,
            this.posicionActual.longitude,
            this.posicionActual.speed);
          this.operacionesLogin.enviarpanico(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
            .then(data => {
              let fechaReporte: Date = new Date();
              //console.log("fecha del reporte " + fechaReporte.getTime());
              this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
              this.loading.dismiss();
              let toast = this.toastCtl.create({
                message: data.mensaje,
                duration: 2000,
                position: 'middle'
              });
              toast.present();
              this.mensaje = "";
              this.fileName = undefined;
              this.mostrarImagen = false;
              //this.lastImage = null;
            }).catch(error => {
              Raven.captureException(error);
              this.loading.dismiss();
              if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                error._body === "Intente nuevamente" ||
                error._body === "Problema interno del servidor") {
                let toast = this.toastCtl.create({
                  message: error._body,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
              } else {
                let toast = this.toastCtl.create({
                  message: "Error desconocido, verifique su conexión a internet.",
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
              }
            })
        } else {
          //console.log('posicion actual null');
          this.loading.dismiss();
          let toast = this.toastCtl.create({
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

  doSospecha() {
    //console.log("touch en sospecha");
    let loading = this.loadingController.create({
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
      let toast = this.toastCtl.create({
        message: "Debe ingresar una breve descripción del reporte o grabe una nota de voz.",
        duration: 3500,
        position: 'middle'
      });
      toast.present();
    } else {
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
      let temp: any = this.localstorage.getObject("fechaReporte");
      let fecha: number = temp;
      if (fecha == null) {
        if (this.posicionActual != null) {
          //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
          let coordenadasTemp = new coordenadas(this.posicionActual.accuracy,
            this.posicionActual.altitude,
            this.posicionActual.altitudeAccuracy,
            this.posicionActual.heading,
            this.posicionActual.latitude,
            this.posicionActual.longitude,
            this.posicionActual.speed);
          this.operacionesLogin.enviarSospecha(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
            .then(data => {
              let fechaReporte: Date = new Date();
              //console.log("fecha del reporte " + fechaReporte.getTime());
              this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
              loading.dismiss();
              let toast = this.toastCtl.create({
                message: data.mensaje,
                duration: 3000,
                position: 'middle'
              });
              toast.present();
              this.fileName = undefined;
              //this.lastImage = null;
              this.mostrarImagen = false;
              this.mensaje = "";
            }).catch(error => {
              Raven.captureException(error);
              loading.dismiss();
              if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                error._body === "Intente nuevamente" ||
                error._body === "Problema interno del servidor") {
                let toast = this.toastCtl.create({
                  message: error._body,
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
              } else {
                let toast = this.toastCtl.create({
                  message: "Error desconocido, verifique su conexión a internet.",
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
              }
            })
        } else {
          //console.log('posicion actual null');
          loading.dismiss();
          let toast = this.toastCtl.create({
            message: 'La precisión de la ubicación mínima es de 25 metros y el GPS en este momento tiene una precisión ' + this.precision,
            position: 'middle',
            closeButtonText: 'ok',
            showCloseButton: true,
            dismissOnPageChange: false
          });
          toast.present();
        }
      } else {
        let fechaActual = new Date();
        let duracion: number = (fechaActual.getTime() - fecha);
        if (duracion < this.minutoPenalizado * 60 * 1000) {
          loading.dismiss();
          //console.log("penalizado por tiempo");
          let toast = this.toastCtl.create({
            message: "Usted ya ha reportado en los últimos 5 minutos, espere ese mínimo lapso de tiempo para volver a realizarlo ",
            duration: 4000,
            position: 'middle'
          });
          toast.present();
        } else {
          if (this.posicionActual != null) {
            //console.log("LatLong " + this.posicionActual.latitude + "," + this.posicionActual.longitude + " precision" + this.posicionActual.accuracy);
            let coordenadasTemp = new coordenadas(this.posicionActual.accuracy,
              this.posicionActual.altitude,
              this.posicionActual.altitudeAccuracy,
              this.posicionActual.heading,
              this.posicionActual.latitude,
              this.posicionActual.longitude,
              this.posicionActual.speed);
            this.operacionesLogin.enviarSospecha(this.usuarioActivo, this.mensaje, coordenadasTemp, this.anonimato, this.uuidImagen, this.uuidGrabacionVoz)
              .then(data => {
                let fechaReporte: Date = new Date();
                //console.log("fecha del reporte " + fechaReporte.getTime());
                this.localstorage.guardar("fechaReporte", fechaReporte.getTime().toString());
                loading.dismiss();
                let toast = this.toastCtl.create({
                  message: data.mensaje,
                  duration: 2000,
                  position: 'middle'
                });
                toast.present();
                this.mensaje = "";
                //this.lastImage = null;
                this.mostrarImagen = false;
                this.fileName = undefined;
              }).catch(error => {
                Raven.captureException(error);
                loading.dismiss();
                if (error._body === "Se ha detectado un problema, por favor reinicie la aplicación" ||
                  error._body === "Intente nuevamente" ||
                  error._body === "Problema interno del servidor") {
                  let toast = this.toastCtl.create({
                    message: error._body,
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
                } else {
                  let toast = this.toastCtl.create({
                    message: "Error desconocido, verifique su conexión a internet.",
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
                }
              })
          } else {
            //console.log('posicion actual null');
            loading.dismiss();
            let toast = this.toastCtl.create({
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
  }


  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      enableBackdropDismiss: true,
      title: 'Seleccionar fuente de la imagen',
      buttons: [
        {
          icon: "ios-image",
          text: 'Cargar desde la Galeria',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          icon: 'ios-camera',
          text: 'Usar Camara',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
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
  }

  public takePicture(sourceType) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.lastImage == null && this.lastImage == undefined) {
        //console.log("aqui antes de generar uuid");
        this.uuid = this.uuidv4();
      } else {
        this.uuid = this.uuidv4();
      }

      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            this.uuidImagen = this.uuid;
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        this.uuidImagen = this.uuid;
      }
    }, (err) => {
      this.presentToast('No se seleccionó ninguna fotografía.');
    });
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      this.mostrarImagen = true;
      this.uploadImage();
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  private presentToastPos(text, ubicacion) {
    let toast = this.toastCtl.create({
      message: text,
      duration: 2000,
      position: ubicacion
    });
    toast.present();
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  public uploadImage() {
    var url = this.Conexion.urlWebServices + "eventos/subirfoto";

    var targetPath = this.pathForImage(this.lastImage);

    var options = {
      fileKey: "file",
      fileName: this.uuidImagen + ".jpg",
      httpMethod: "POST",
      mimeType: "multipart/form-data",
      params: { 'UUID': this.uuidImagen }
    };

    const fileTransfer: TransferObject = this.transfer.create();

    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Imagen cargada con éxito.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error al cargar el archivo.');
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
  }

  startRecord() {
    this.uuidGrabacionVoz = this.uuidv4();
    if (this.platform.is('ios')) {
      this.fileName = "grabacion-" + this.uuidGrabacionVoz + '.3gp';
      this.filePath2 = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath2);
    } else if (this.platform.is('android')) {
      this.fileName = "grabacion-" + this.uuidGrabacionVoz + '.3gp';
      this.filePath2 = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath2);
    }
    this.audio.startRecord();
    this.recording = true;
    this.presentToastPos("Presione para Grabar, Suelte para guardar", "bottom");
  }

  stopRecord() {
    this.audio.stopRecord();
    this.recording = false;
    this.uploadAudio();
  }

  playAudio() {
    if (this.platform.is('ios')) {
      this.filePath2 = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath2);
    } else if (this.platform.is('android')) {
      this.filePath2 = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath2);
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

  public uploadAudio() {
    var url = this.Conexion.urlWebServices + "eventos/subirAudio";
    var options = {
      fileKey: "file",
      fileName: this.uuidGrabacionVoz + ".3gp",
      httpMethod: "POST",
      mimeType: "multipart/form-data",
      params: { 'UUID': this.uuidGrabacionVoz }
    };

    const fileTransfer: TransferObject = this.transfer.create();

    fileTransfer.upload(this.filePath2, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Grabación cargada con éxito.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error al cargar el archivo.');
    });
  }

  stopAudio() {
    this.audio.pause();
    this.reproduciendoAudio = false;
  }
} 