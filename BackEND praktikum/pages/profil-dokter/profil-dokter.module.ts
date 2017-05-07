import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilDokter } from './profil-dokter';

@NgModule({
  declarations: [
    ProfilDokter,
  ],
  imports: [
    IonicPageModule.forChild(ProfilDokter),
  ],
  exports: [
    ProfilDokter
  ]
})
export class ProfilDokterModule {}
