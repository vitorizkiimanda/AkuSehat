import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPasien } from './signup-pasien';

@NgModule({
  declarations: [
    SignupPasien,
  ],
  imports: [
    IonicPageModule.forChild(SignupPasien),
  ],
  exports: [
    SignupPasien
  ]
})
export class SignupPasienModule {}
