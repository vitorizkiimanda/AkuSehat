import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPasien } from './login-pasien';

@NgModule({
  declarations: [
    LoginPasien,
  ],
  imports: [
    IonicPageModule.forChild(LoginPasien),
  ],
  exports: [
    LoginPasien
  ]
})
export class LoginPasienModule {}
