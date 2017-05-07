import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanggilDokter } from './panggil-dokter';

@NgModule({
  declarations: [
    PanggilDokter,
  ],
  imports: [
    IonicPageModule.forChild(PanggilDokter),
  ],
  exports: [
    PanggilDokter
  ]
})
export class PanggilDokterModule {}
