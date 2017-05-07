import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AkuSehat } from './aku-sehat';

@NgModule({
  declarations: [
    AkuSehat,
  ],
  imports: [
    IonicPageModule.forChild(AkuSehat),
  ],
  exports: [
    AkuSehat
  ]
})
export class AkuSehatModule {}
