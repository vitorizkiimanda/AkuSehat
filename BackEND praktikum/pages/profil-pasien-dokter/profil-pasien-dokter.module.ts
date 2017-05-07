import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilPasienDokter } from './profil-pasien-dokter';

@NgModule({
  declarations: [
    ProfilPasienDokter,
  ],
  imports: [
    IonicPageModule.forChild(ProfilPasienDokter),
  ],
  exports: [
    ProfilPasienDokter
  ]
})
export class ProfilPasienDokterModule {}
