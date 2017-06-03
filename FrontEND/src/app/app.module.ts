import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsDokter } from '../pages/tabs-dokter/tabs-dokter';
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
import { PengaturanDokter } from '../pages/pengaturan-dokter/pengaturan-dokter';
import { ProfilDokter } from '../pages/profil-dokter/profil-dokter';
import { ProfilPasienDokter } from '../pages/profil-pasien-dokter/profil-pasien-dokter';
import { SignupDokter } from '../pages/signup-dokter/signup-dokter';
import { DaftarPasien } from '../pages/daftar-pasien/daftar-pasien';
import { HarianPasienPage } from '../pages/harian-pasien/harian-pasien';
import { TambahRiwayatPage } from '../pages/tambah-riwayat/tambah-riwayat';
import { PilihDokterLagiPage } from '../pages/pilih-dokter-lagi/pilih-dokter-lagi';
import { ThemePage } from '../pages/theme/theme';
import { ThemeDoctorPage } from '../pages/theme-doctor/theme-doctor';
import { KomentarPage } from '../pages/komentar/komentar';
import { KomentarDokterPage } from '../pages/komentar-dokter/komentar-dokter';
import { RiwayatEditPage } from '../pages/riwayat-edit/riwayat-edit';
import { SignupPasien2Page } from '../pages/signup-pasien-2/signup-pasien-2';

import { Data } from '../providers/data';

import { CallNumber } from '@ionic-native/call-number';
import {HttpModule} from '@angular/http';
import {Storage } from '@ionic/storage';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    Login,
    LoginPasien,
    LoginDokter,
    SignupPasien,
    SignupPasien2Page,
    PengaturanPasien,
    Beranda,
    BerandaDokter,
    EditProfilDokter,
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
    TabsDokter,
    DaftarPasien,
    HarianPasienPage,
    TambahRiwayatPage,
    PilihDokterLagiPage,
    ThemePage,
    ThemeDoctorPage,
    KomentarPage,
    KomentarDokterPage,
    RiwayatEditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    LoginPasien,
    LoginDokter,
    SignupPasien,
    SignupPasien2Page,
    PengaturanPasien,
    Beranda,
    BerandaDokter,
    EditProfilDokter,
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
    TabsDokter,
    DaftarPasien,
    HarianPasienPage,
    TambahRiwayatPage,
    PilihDokterLagiPage,
    ThemePage,
    ThemeDoctorPage,
    KomentarPage,
    KomentarDokterPage,
    RiwayatEditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Data,
    Storage,
    CallNumber,
    BackgroundMode,
    Vibration,
    File,
    Transfer,
    Camera,
    FilePath,
    LocalNotifications,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
