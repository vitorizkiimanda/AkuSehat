import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilDokter } from './edit-profil-dokter';

@NgModule({
  declarations: [
    EditProfilDokter,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilDokter),
  ],
  exports: [
    EditProfilDokter
  ]
})
export class EditProfilDokterModule {}
