import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bayar } from './bayar';

@NgModule({
  declarations: [
    Bayar,
  ],
  imports: [
    IonicPageModule.forChild(Bayar),
  ],
  exports: [
    Bayar
  ]
})
export class BayarModule {}
