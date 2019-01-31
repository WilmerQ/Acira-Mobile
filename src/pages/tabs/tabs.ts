import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import * as Raven from 'raven-js';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  inicioRoot = 'PrincipalPage'
  historialRoot = 'HistorialPage'

  constructor(public navCtrl: NavController,
    private app: App,
    public navParams: NavParams) {
    let cierre: string = navParams.get("objeto");
    if (cierre == "cerrarSesion") {
      Raven.setUserContext(null);
      this.app.getRootNavs()[0].setRoot("LoginPage");
    }
  }

}
