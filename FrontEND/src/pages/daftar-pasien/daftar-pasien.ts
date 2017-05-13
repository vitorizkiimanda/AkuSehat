import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-daftar-pasien',
  templateUrl: 'daftar-pasien.html',
})
export class DaftarPasien {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public http: Http, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPasien');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
