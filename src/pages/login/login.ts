import { usuarioRegistro } from './../../models/usuarioRegistro';
import { OperacionesLocalStorageProvider } from './../../providers/operaciones-local-storage/operaciones-local-storage';
import { OperacionesHttpProvider } from './../../providers/operaciones-http/operaciones-http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import * as Raven from 'raven-js';
//import { Autostart } from '@ionic-native/autostart';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
  desactivarElementos: boolean = false;
  paginaRegistro: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public operacionesLogin: OperacionesHttpProvider,
    public localStorage: OperacionesLocalStorageProvider,
    public loadingController: LoadingController,
    public toastCtl: ToastController,
    private androidPermissions: AndroidPermissions,
    public fb: FormBuilder) {
    this.paginaRegistro = 'RegistroPage';
    this.myForm = this.fb.group({
      nombreusuario: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,16}$/)]],
      contrasena: ['', [Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/)]]
    });
  }

  ionViewCanEnter() {
    let idDispositivo = this.localStorage.getObject("idDispositivo");
    if (idDispositivo == null) {
      this.localStorage.guardar("idDispositivo", "" + Math.floor(Math.random() * 999999) + 1);
    }

    let temp: string = this.localStorage.getObject("usuarioLogin");
    let usuarioActivo: usuarioRegistro = JSON.parse(temp);
    if (usuarioActivo != null) {
      //this.navCtrl.setRoot("PrincipalPage");
      Raven.setUserContext({
        nombrecompleto: usuarioActivo.nombrecompleto,
        identificacion: usuarioActivo.identificacion,
        celular: usuarioActivo.celular,
        email: usuarioActivo.email,
        nombreusuario: usuarioActivo.nombreusuario,
        codigofamiliar: usuarioActivo.codigofamiliar,
        idSesion: usuarioActivo.idSesion
      });
      this.navCtrl.setRoot("TabsPage");
    } else {
      this.permisos();
    }
  }

  doLogin() {
    let nombre: string = this.myForm.get('nombreusuario').value;
    let contrasena: string = this.myForm.get('contrasena').value;
    if (nombre != '' && contrasena != '') {
      let usuario = new Usuario(this.myForm.get('nombreusuario').value, this.myForm.get('contrasena').value);
      let loading = this.loadingController.create({
        spinner: 'ios',
        content: 'Por favor espere...',
        dismissOnPageChange: true
      });
      loading.present();
      this.desactivarElementos = true;
      this.operacionesLogin.login(usuario)
        .then(data => {
          let usuariotemp: usuarioRegistro = new usuarioRegistro(
            data.nombrecompleto,
            data.numeroIdentificacion,
            data.telefono,
            data.email,
            data.nombreUsuario,
            null,
            data.codigofamiliar,
            data.idSesion,
            null
          );
          this.localStorage.guardarObjeto("usuarioLogin", usuariotemp);
          loading.dismiss;
          Raven.setUserContext({
            nombrecompleto: usuariotemp.nombrecompleto,
            identificacion: usuariotemp.identificacion,
            celular: usuariotemp.celular,
            email: usuariotemp.email,
            nombreusuario: usuariotemp.nombreusuario,
            codigofamiliar: usuariotemp.codigofamiliar,
            idSesion: usuariotemp.idSesion
          });
          //this.navCtrl.setRoot("PrincipalPage");
          this.navCtrl.setRoot("TabsPage");
        })
        .catch(error => {
          Raven.captureException(error);
          loading.dismiss();
          this.desactivarElementos = false;
          if (error._body === "Usuario y/o Contraseña incorrecto" ||
            error._body === "Su grupo familiar se encuentra desactivado, favor revise el estado de su pago mensual" ||
            error._body === "Problema interno del servidor") {
            let toast = this.toastCtl.create({
              message: error._body,
              duration: 3000,
              position: 'middle'
            });
            toast.present();
          } else {
            let toast = this.toastCtl.create({
              message: "Error desconocido, verifique su conexión a internet",
              duration: 3000,
              position: 'middle'
            });
            toast.present();
          }
        })
    } else {
      let toast = this.toastCtl.create({
        message: "Ingrese sus credenciales",
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }
  }

  permisos() {
    this.androidPermissions.requestPermissions([
      this.androidPermissions.PERMISSION.CAMERA,
      this.androidPermissions.PERMISSION.RECORD_AUDIO,
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
    ]);
  }

  setFilteredItems() {
    let nombre: string = this.myForm.get('nombreusuario').value;
    nombre = nombre.trim();
    this.myForm.get("nombreusuario").setValue(nombre.toLowerCase());
  }

  setFilterPassword() {
    let nombre: string = this.myForm.get('contrasena').value;
    nombre = nombre.trim();
    this.myForm.get("contrasena").setValue(nombre);
  }
}