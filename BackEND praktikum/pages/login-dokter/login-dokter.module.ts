import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginDokter } from './login-dokter';

@NgModule({
  declarations: [
    LoginDokter,
  ],
  imports: [
    IonicPageModule.forChild(LoginDokter),
  ],
  exports: [
    LoginDokter
  ]
})
export class LoginDokterModule {}
