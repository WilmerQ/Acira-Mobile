import { OperacionesLocalesProvider } from './../providers/operaciones-locales/operaciones-locales';
import { Diagnostic } from '@ionic-native/diagnostic';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { OperacionesHttpProvider } from '../providers/operaciones-http/operaciones-http';
import { OperacionesLocalStorageProvider } from '../providers/operaciones-local-storage/operaciones-local-storage';
import { Network } from '@ionic-native/network';
import { Push } from '@ionic-native/push';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Media } from '@ionic-native/media';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { validacionesAsincronas } from '../validators/validacionesAsincronas';
import { SocialSharing } from '@ionic-native/social-sharing';

import * as Raven from 'raven-js';

import { IonicStorageModule } from '@ionic/storage';
import { from } from 'rxjs/observable/from';

Raven
  .config('https://5777f217f2a84f01bb42aba3a6b9ed4b@sentry.io/1225966')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{ provide: ErrorHandler, useClass: RavenErrorHandler },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    OperacionesHttpProvider,
    OperacionesLocalStorageProvider,
    Network,
    Geolocation,
    Diagnostic,
    Push,
    Camera,
    File,
    AndroidPermissions,
    Transfer,
    FilePath,
    OperacionesLocalesProvider,
    Media,
    validacionesAsincronas,
    SocialSharing
    //BarcodeScanner
  ]
})
export class AppModule { }
