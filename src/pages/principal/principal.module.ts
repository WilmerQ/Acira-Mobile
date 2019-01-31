import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';

@NgModule({
  declarations: [
    PrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
  ],
  exports:[
    PrincipalPage,
  ]
})
export class PrincipalPageModule {}
