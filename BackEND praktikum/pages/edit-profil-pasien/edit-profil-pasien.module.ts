import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilPasien } from './edit-profil-pasien';

@NgModule({
  declarations: [
    EditProfilPasien,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilPasien),
  ],
  exports: [
    EditProfilPasien
  ]
})
export class EditProfilPasienModule {}
