import { validacionesAsincronas } from './../../validators/validacionesAsincronas';
import { OperacionesLocalStorageProvider } from './../../providers/operaciones-local-storage/operaciones-local-storage';
import { usuarioRegistro } from './../../models/usuarioRegistro';
import { OperacionesHttpProvider } from './../../providers/operaciones-http/operaciones-http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, Platform, AlertController, ActionSheetController } from 'ionic-angular';
import { conexion } from '../../models/conexion';
import { validaciones } from '../../validators/validaciones';
import * as Raven from 'raven-js';
import { Camera } from '@ionic-native/camera';
import uuid from 'uuid/v4';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { TransferObject, Transfer } from '@ionic-native/transfer';
import { ciudad } from '../../models/ciudad';
//import { Scandit } from "barcodescanner-sdk-cordova";
//declare var Pdf417Scanner: any;
//declare var Scandit;

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  myForm: FormGroup;
  actualizar: boolean = false;
  cambioContra: boolean;
  usuarioActivo: usuarioRegistro;
  cucumber: boolean = true;
  lastImage: any;
  uuidv4 = require('uuid/v4');
  uuid: string;
  mostrarImagen: boolean;
  //public result: string;
  uuidImagen: string;
  Conexion: conexion = new conexion();
  ciudades: ciudad[] = [];
  barrios: any[] = [];
  //private scanditKey: string = "AY7MdjbyKq6YAbjaqDEFlRI8kljrO4vVCyqvnMNJ5C/7YqJy6W0XP5JfMA52VgXwR39MlH5N4Z9NNrQ7/wyHYkJszD95av7hvnCDnWJVOfpBQ0HIrkT+ngCpP+0AT317DtiUSOO358Lr3iU48dpxEThaQa4qIPqJ9xtQNsPyZtpYTyJ6omlVqfiqWoV7Ydpy9tuGd++qyoEJ57cbJlIdDo+U8Ha9vHHUGg6sqRL6k2kZfYXxJH2kdjlTMCtn+PIsnnacolNTICGIQJ+lDAlmmvpiZ25k/HUtRjCUtAaQpms/wDYLMHywgSsFtSoT4RRngkzYphFtWw7dRpPAHj7bYNxthUM2wuVSG08Wxns785FFl3cLhjLqlEVKSVCoeesM9xleGB9gw5F5Ow1JS3X8DszTXmGmnrTfYXVp7iT/cj+Fd4RiBMS1gWry+lEdDE89NClmjGUVm2vhBYJQUujP4VJyONMyH3g6Z4kMyr1xtjwAt19opRtc+deMlBH+GKKpaLRmVQlInUz6sqfd6+qF8W+4ZgmCxcT43126ZTi8bMWAHvlaObONwoxrnXzCaVYNjI11Vmw1MkpgsRuSxl5UUpM+r/BbofRvqxnG94Zt/ikQSJrFJ7KmB5hAfugSFNR40rShYHpMXE3F0XldAzSLf4BdeYwcAmWld3wfQdDL7I/FCbYLfPvuHsntDcjVtczhnJDxaqFbGVt7qw3dqb4KUkYZAF+37CplyGdeIpMBz/a827YldA/T6VCM8RC0OnnuDVcE2IHQK+pr2PxaDt4j9KTQhc648Ot6tQ==";
  ciudadNombre: string;
  barrioNombre: string;
  ciudadSelecionada: boolean = false;
  barrioSelecionado: boolean = false;
  codigoGenerado: string;
  colorBotton: any = "#ed7425";
  textBotton: string = "Captura tu cedula";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public loadingController: LoadingController,
    public localStorage: OperacionesLocalStorageProvider,
    public toastCtl: ToastController,
    public toastCtrl: ToastController,
    public operacionesLogin: OperacionesHttpProvider,
    public validacionesAsyn: validacionesAsincronas,
    public modalCtrl: ModalController,
    public platform: Platform,
    public alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private filePath: FilePath,
    private transfer: Transfer,
    private file: File,
    private httpProvider: OperacionesHttpProvider,
  ) {
    this.actualizar = navParams.get("actualizar");
    this.cambioContra = false;
    this.myForm = this.fb.group({
      nombrecompleto: ['', [Validators.required]],
      identificacion:
        ['',
          [Validators.required, Validators.pattern(/^([0-9])*$/)],
          this.validacionesAsyn.validarNumeroIdentificacion.bind(this.validacionesAsyn)
        ],
      celular:
        ['',
          [Validators.required, Validators.pattern(/^3([0-9])*$/)],
          this.validacionesAsyn.validarTelefono.bind(this.validacionesAsyn)
        ],
      direccion: ['', [Validators.required]],
      email:
        ['',
          [Validators.required, Validators.email]
        ],
      nombreusuario:
        ['',
          [Validators.required, Validators.pattern(/^[a-z0-9_-]{5,16}$/), Validators.minLength(5)],
          this.validacionesAsyn.validarNombreUsuario.bind(this.validacionesAsyn)
          //this.validarNombreUsuario.bind(this)
        ],
      contrasena:
        ['',
          [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/), validaciones.buscarMayuscula, validaciones.buscarNumeros]
        ],
      confirmacion:
        ['',
          [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/), validaciones.buscarMayuscula, validaciones.buscarNumeros]
        ],
      //codigofamiliar: ['', [Validators.required, Validators.minLength(8)]],
      codigofamiliar: ['', []],
      terminos: [false, Validators.requiredTrue]
    });

    if (this.actualizar) {
      let temp: string = this.localStorage.getObject("usuarioLogin");
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

  ionViewDidEnter() {
    /*if (!this.actualizar) {
      let profileModal = this.modalCtrl.create("ModalyoutubePage");
      profileModal.present();
    }*/
    //if (!this.actualizar) {
    console.log("aqui en ionViewDidEnter");
    this.httpProvider.getCiudadesActivas().then(data => {
      console.log("********************* recibiendo ciudades");
      console.log(JSON.stringify(data));
      this.ciudades = data;
    }).catch(error => {
      console.log(JSON.stringify(error));
    });
    //}
  }

  ionChangeCiudad(temp: any) {
    console.log("ionChangeCiudad " + JSON.stringify(temp));
    this.ciudadNombre = temp;
    this.ciudadSelecionada = true;

    this.httpProvider.getBarriosActivos(temp).then(data => {
      console.log("********************* recibiendo barrios");
      console.log(JSON.stringify(data));
      this.barrios = data;
    }).catch(error => {
      console.log(JSON.stringify(error));
    });
  }

  ionChangeBarrio(temp: any) {
    console.log("ionChangeCiudad " + JSON.stringify(temp));
    this.barrioNombre = temp;
    this.barrioSelecionado = true;
  }

  preRegistro() {
    if (this.textBotton === "Captura tu cedula") {
      let toast = this.toastCtrl.create({
        message: "Debe capturar una fotografía de su documento de identidad por la parte frontal",
        duration: 4000,
        position: 'middle'
      });
      toast.present();
    } else {
      this.operacionesLogin.crearCodigoSeguridad(
        this.myForm.get('identificacion').value,
        this.myForm.get('nombrecompleto').value,
        this.ciudadNombre,
        this.barrioNombre,
        this.myForm.get('direccion').value
      ).then(data => {
        console.log("********************* creando codigo seguridad");
        console.log(JSON.stringify(data));
        this.codigoGenerado = data.codigo;
        console.log(this.codigoGenerado);
        this.doRegister();
      }).catch(error => {
        console.log(JSON.stringify(error));
      });
    }
  }

  doRegister() {
    let loading = this.loadingController.create({
      spinner: 'ios',
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    loading.present();

    if (this.myForm.get('contrasena').value === this.myForm.get('confirmacion').value) {
      let nuevoUsuario = new usuarioRegistro(
        this.myForm.get('nombrecompleto').value,
        this.myForm.get('identificacion').value,
        this.myForm.get('celular').value,
        this.myForm.get('email').value,
        this.myForm.get('nombreusuario').value,
        this.myForm.get('contrasena').value,
        this.codigoGenerado,
        null,
        this.uuidImagen
      );
      this.operacionesLogin.registro(nuevoUsuario)
        .then(data => {
          this.myForm.reset();
          loading.dismiss();
          let toast = this.toastCtrl.create({
            message: data.mensaje,
            duration: 4000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.setRoot("LoginPage");
          this.navCtrl.popToRoot();
        })
        .catch(error => {
          Raven.captureException(error);
          loading.dismiss();
          if (error._body == "El código familiar ingresado no concuerda, favor verificarlo y vuelva intentar" ||
            error._body == "El nombre de usuario ya se encuentra siendo utilizado por otro usuario, favor ingrese uno diferente" ||
            error._body == "Ya se encuentra registrado un usuario con el mismo número de identificación, favor verifique" ||
            error._body == "Otro usuario registro el número de celular, favor verifique o cámbielo" ||
            error._body == "El código familiar ya alcanzo el cupo de usuarios establecido, si desea extender el número de usuarios colóquese en contacto con el prestador del servicio." ||
            error._body == "Problema interno del servidor") {
            let toast = this.toastCtrl.create({
              message: error._body,
              duration: 4000,
              position: 'middle'
            });
            toast.present();
          } else {
            let toast = this.toastCtrl.create({
              message: "Error desconocido, verifique su conexión a internet",
              duration: 3000,
              position: 'middle'
            });
            toast.present();
          }
        });
    } else {
      loading.dismiss();
      this.myForm.get('confirmacion').setValue('');
      let toast = this.toastCtrl.create({
        message: 'la confirmación no coincide con la contraseña, vuelva a ingresarla',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
  }

  doActualizar() {
    //console.log("aqui en doActualizar");
    let contrasena: string;
    let actualizarUsuario: boolean = false;
    let loading = this.loadingController.create({
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
      } else {
        loading.dismiss();
        let toast = this.toastCtrl.create({
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

    let usuarioActualizar = new usuarioRegistro(
      this.myForm.get('nombrecompleto').value,
      this.usuarioActivo.identificacion,
      this.myForm.get('celular').value,
      this.myForm.get('email').value,
      this.myForm.get('nombreusuario').value,
      contrasena,
      this.usuarioActivo.codigofamiliar,
      this.usuarioActivo.idSesion,
      null);

    if (actualizarUsuario) {
      this.operacionesLogin.actualizar(usuarioActualizar)
        .then(data => {
          this.myForm.reset();
          loading.dismiss();
          let toast = this.toastCtrl.create({
            message: data.mensaje,
            duration: 4000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.setRoot("PrincipalPage", { cerrarSesionOk: "ok" });
          this.navCtrl.popToRoot();
        }).catch(error => {
          Raven.captureException(error);
          loading.dismiss();
          if (error._body == "El nombre de usuario ya se encuentra siendo utilizado por otro usuario, favor ingrese uno diferente" ||
            error._body == "Otro usuario registro el número de celular, favor verifique o cámbielo" ||
            error._body == "Problema interno del servidor") {
            let toast = this.toastCtrl.create({
              message: error._body,
              duration: 4000,
              position: 'middle'
            });
            toast.present();
          } else {
            let toast = this.toastCtrl.create({
              message: "Error desconocido, verifique su conexión a internet",
              duration: 3000,
              position: 'middle'
            });
            toast.present();
          }
        });
    } else {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'ningun dato modificado',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
  }

  terminos() {
    let con = new conexion();
    //window.open("http://" + con.ip + ":" + con.port + "/Acira/terminos.xhtml", '_system', 'location=yes');
    return "http://" + con.ip + ":" + con.port + "/Acira/terminos.xhtml";
  }

  setFilteredItems() {
    let nombre: string = this.myForm.get('nombreusuario').value;
    if (nombre != null) {
      nombre = nombre.trim();
      this.myForm.get("nombreusuario").setValue(nombre.toLowerCase());
    }
  }

  setFilterPassword() {
    let nombre: string = this.myForm.get('contrasena').value;
    if (nombre != null) {
      nombre = nombre.trim();
      this.myForm.get("contrasena").setValue(nombre);
    }
  }

  setFilterConfimacion() {
    let nombre: string = this.myForm.get('confirmacion').value;
    if (nombre != null) {
      nombre = nombre.trim();
      this.myForm.get("confirmacion").setValue(nombre);
    }
  }

  updateCucumber() {
    if (this.cucumber) {
      this.cucumber = false;
    } else {
      this.cucumber = true;
    }

    console.log('Cucumbers new state:' + this.cucumber);
  }

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
    var url = this.Conexion.urlWebServices + "usuario/subirdocumento";

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
      //this.loading.dismissAll()
      this.colorBotton = "#32db64";
      this.textBotton = "Cargada."
      this.presentToast('Imagen cargada con éxito.');
    }, err => {
      //this.loading.dismissAll()
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
}
