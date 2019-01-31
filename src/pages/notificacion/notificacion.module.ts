import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificacionPage } from './notificacion';

@NgModule({
  declarations: [
    NotificacionPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificacionPage),
  ],
  exports: [
    NotificacionPage,
  ]
})
export class NotificacionPageModule { }
