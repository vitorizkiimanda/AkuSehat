import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { BerandaDokter } from '../beranda-dokter/beranda-dokter';
import { EditProfilDokter } from '../edit-profil-dokter/edit-profil-dokter';
import { PanggilPasien } from '../panggil-pasien/panggil-pasien';
import { Bayar } from '../bayar/bayar';
import { ProfilDokter } from '../profil-dokter/profil-dokter';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { DaftarPasien } from '../daftar-pasien/daftar-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-tabs-dokter',
  templateUrl: 'tabs-dokter.html',
})
export class TabsDokter {

  theme: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data: Data,public http: Http) {
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getDataDokter().then((data) => {
    
      this.theme= data.theme;
      
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsDokter');
  }

  tab1Root = BerandaDokter;
  tab2Root = ProfilDokter;
  tab3Root = DaftarPasien;

}
