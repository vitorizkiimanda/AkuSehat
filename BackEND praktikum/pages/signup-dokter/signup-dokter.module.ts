import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupDokter } from './signup-dokter';

@NgModule({
  declarations: [
    SignupDokter,
  ],
  imports: [
    IonicPageModule.forChild(SignupDokter),
  ],
  exports: [
    SignupDokter
  ]
})
export class SignupDokterModule {}
