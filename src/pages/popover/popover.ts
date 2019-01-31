import { conexion } from './../../models/conexion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, AlertController } from 'ionic-angular';
import { OperacionesLocalStorageProvider } from '../../providers/operaciones-local-storage/operaciones-local-storage';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  rutaDirecta: boolean;
  rutaVehicular: boolean;
  tipoPopover: string;
  registroPage: string = "RegistroPage";


  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public localstorage: OperacionesLocalStorageProvider,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private socialSharing: SocialSharing) {
    this.tipoPopover = navParams.get("tipo");
    if (this.tipoPopover == "mapa") {
      let temp: string = localstorage.getObject("rutadirecta");
      if (temp.indexOf("true") >= 0) {
        this.rutaDirecta = true;
      } else {
        this.rutaDirecta = false;
      }
      temp = localstorage.getObject("rutaauto");
      if (temp.indexOf("true") >= 0) {
        this.rutaVehicular = true;
      } else {
        this.rutaVehicular = false;
      }
    }
  }

  ionViewWillLeave() {
    //console.log("ionViewWillLeave popover");
    if (this.tipoPopover == "mapa") {
      this.localstorage.guardarObjeto("rutadirecta", this.rutaDirecta);
      this.localstorage.guardarObjeto("rutaauto", this.rutaVehicular);
    }
  }

  close() {
    this.viewCtrl.dismiss();
  }

  shareApp() {
    this.presentActionSheet();
    this.close();
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      enableBackdropDismiss: true,
      title: 'Compartir via',
      buttons: [
        {
          icon: "logo-whatsapp",
          text: 'Whatsapp',
          handler: () => {
            this.socialSharing.shareViaWhatsApp("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram", "www/assets/img/imagenTocompartir.png", "https://goo.gl/tpCRfZ");
          }
        },
        {
          icon: "logo-facebook",
          text: 'Facebook',
          handler: () => {
            this.socialSharing.shareViaFacebookWithPasteMessageHint("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram. https://goo.gl/tpCRfZ", "www/assets/img/imagenTocompartir.png", null, "Si lo desea, puede pegar un mensaje desde su portapapeles");
          }
        },
        {
          icon: "logo-twitter",
          text: 'Twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram.", "www/assets/img/imagenTocompartir.png", "https://goo.gl/tpCRfZ");
          }
        },
        {
          icon: "logo-instagram",
          text: 'Instagram',
          handler: () => {
            this.socialSharing.shareViaInstagram("Descarga la app Acira Security y únete a la red de apoyo de tu barrio, si aún no está disponible solicita su creación completamente gratis. Síguenos Acira Santa Marta en Facebook o acirasecurity en Instagram. https://goo.gl/tpCRfZ", null);
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

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Calificar la aplicación',
      message: 'Califícanos, tu opinión nos hace mejorar cada día',
      buttons: [
        {
          text: 'NO',
          handler: () => {
          }
        },
        {
          text: 'SI',
          handler: () => {
            window.open("https://play.google.com/store/apps/details?id=co.acira", '_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
    this.close();
  }

  pagfacebook() {
    window.open("https://www.facebook.com/acira.sas.7", '_system', 'location=yes');
    this.viewCtrl.dismiss();
  }

  terminos() {
    let con = new conexion();
    window.open("http://" + con.ip + ":" + con.port + "/Acira/terminos.xhtml", '_system', 'location=yes');
    this.viewCtrl.dismiss();
  }

}
