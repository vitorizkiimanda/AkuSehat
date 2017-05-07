import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PengaturanPasien } from './pengaturan-pasien';

@NgModule({
  declarations: [
    PengaturanPasien,
  ],
  imports: [
    IonicPageModule.forChild(PengaturanPasien),
  ],
  exports: [
    PengaturanPasien
  ]
})
export class PengaturanPasienModule {}
