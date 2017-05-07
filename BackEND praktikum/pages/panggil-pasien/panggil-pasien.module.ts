import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanggilPasien } from './panggil-pasien';

@NgModule({
  declarations: [
    PanggilPasien,
  ],
  imports: [
    IonicPageModule.forChild(PanggilPasien),
  ],
  exports: [
    PanggilPasien
  ]
})
export class PanggilPasienModule {}
