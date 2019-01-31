import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalyoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalyoutube',
  templateUrl: 'modalyoutube.html',
})
export class ModalyoutubePage {

  [x: string]: any;
  video: any = {
    url: '',
    title: 'Awesome video'
  };

  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private domSanitizer: DomSanitizer) {
    this.loading = this.loadingController.create({
      content: 'Por favor espere...'
    });
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalyoutubePage');
  }

  ionViewWillEnter() {
    this.loading.present();
  }

  handleIFrameLoadEvent(): void {
    this.loading.dismiss();
  }

}
