import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { BerandaDokter } from '../beranda-dokter/beranda-dokter';
import { EditProfilDokter } from '../edit-profil-dokter/edit-profil-dokter';
import { PanggilPasien } from '../panggil-pasien/panggil-pasien';
import { Bayar } from '../bayar/bayar';
import { ProfilDokter } from '../profil-dokter/profil-dokter';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { DaftarPasien } from '../daftar-pasien/daftar-pasien';


@Component({
  selector: 'page-tabs-dokter',
  templateUrl: 'tabs-dokter.html',
})
export class TabsDokter {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsDokter');
  }

  tab1Root = BerandaDokter;
  tab2Root = ProfilDokter;
  tab3Root = DaftarPasien;

}
