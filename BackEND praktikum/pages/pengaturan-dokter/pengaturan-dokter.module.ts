import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PengaturanDokter } from './pengaturan-dokter';

@NgModule({
  declarations: [
    PengaturanDokter,
  ],
  imports: [
    IonicPageModule.forChild(PengaturanDokter),
  ],
  exports: [
    PengaturanDokter
  ]
})
export class PengaturanDokterModule {}
