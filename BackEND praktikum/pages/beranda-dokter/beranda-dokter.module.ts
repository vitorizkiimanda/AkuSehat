import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BerandaDokter } from './beranda-dokter';

@NgModule({
  declarations: [
    BerandaDokter,
  ],
  imports: [
    IonicPageModule.forChild(BerandaDokter),
  ],
  exports: [
    BerandaDokter
  ]
})
export class BerandaDokterModule {}
