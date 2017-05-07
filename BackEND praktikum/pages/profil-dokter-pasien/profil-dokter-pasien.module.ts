import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilDokterPasien } from './profil-dokter-pasien';

@NgModule({
  declarations: [
    ProfilDokterPasien,
  ],
  imports: [
    IonicPageModule.forChild(ProfilDokterPasien),
  ],
  exports: [
    ProfilDokterPasien
  ]
})
export class ProfilDokterPasienModule {}
