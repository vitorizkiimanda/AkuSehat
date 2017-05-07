import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Beranda } from '../pages/beranda/beranda';
import { IsiData } from '../pages/isi-data/isi-data';
import { PanggilDokter } from '../pages/panggil-dokter/panggil-dokter';
import { ProfilPasien } from '../pages/profil-pasien/profil-pasien';
import { Bayar } from '../pages/bayar/bayar';
import { EditProfilPasien } from '../pages/edit-profil-pasien/edit-profil-pasien';
import { AkuSehat } from '../pages/aku-sehat/aku-sehat';
import { Login } from '../pages/login/login';
import { LoginPasien } from '../pages/login-pasien/login-pasien';
import { LoginDokter } from '../pages/login-dokter/login-dokter';
import { PengaturanPasien } from '../pages/pengaturan-pasien/pengaturan-pasien';
import { SignupPasien } from '../pages/signup-pasien/signup-pasien';
import { BayarUpload } from '../pages/bayar-upload/bayar-upload';
import { ProfilDokterPasien } from '../pages/profil-dokter-pasien/profil-dokter-pasien';
import { BerandaDokter } from '../pages/beranda-dokter/beranda-dokter';
import { EditProfilDokter } from '../pages/edit-profil-dokter/edit-profil-dokter';
import { PanggilPasien } from '../pages/panggil-pasien/panggil-pasien';
import { PengaturanDokter } from '../pages/pengaturan-dokter/pengaturan-dokter';
import { ProfilDokter } from '../pages/profil-dokter/profil-dokter';
import { ProfilPasienDokter } from '../pages/profil-pasien-dokter/profil-pasien-dokter';
import { SignupDokter } from '../pages/signup-dokter/signup-dokter';

@NgModule({
  declarations: [
    MyApp,
    Login,
    LoginPasien,
    LoginDokter,
    SignupPasien,
    PengaturanPasien,
    Beranda,
    BerandaDokter,
    EditProfilDokter,
    PanggilPasien,
    PengaturanDokter,
    ProfilDokter,
    ProfilPasienDokter,
    SignupDokter,
    IsiData,
    PanggilDokter,
    ProfilPasien,
    ProfilDokterPasien,
    Bayar,
    BayarUpload,
    EditProfilPasien,
    AkuSehat,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    LoginPasien,
    LoginDokter,
    SignupPasien,
    PengaturanPasien,
    Beranda,
    BerandaDokter,
    EditProfilDokter,
    PanggilPasien,
    PengaturanDokter,
    ProfilDokter,
    ProfilPasienDokter,
    SignupDokter,
    IsiData,
    PanggilDokter,
    ProfilPasien,
    ProfilDokterPasien,
    Bayar,
    BayarUpload,
    EditProfilPasien,
    AkuSehat,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}