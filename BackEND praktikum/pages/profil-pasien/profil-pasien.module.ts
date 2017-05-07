import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilPasien } from './profil-pasien';

@NgModule({
  declarations: [
    ProfilPasien,
  ],
  imports: [
    IonicPageModule.forChild(ProfilPasien),
  ],
  exports: [
    ProfilPasien
  ]
})
export class ProfilPasienModule {}
