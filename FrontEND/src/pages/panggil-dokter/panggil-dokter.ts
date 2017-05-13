import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-panggil-dokter',
  templateUrl: 'panggil-dokter.html',
})
export class PanggilDokter {

  telephone:number;

  constructor(public navCtrl: NavController, private callNumber: CallNumber,public data: Data,public alertCtrl: AlertController , public http: Http , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanggilDokter');
  }



  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.telephone = data.no_tel_doctor;
      
    })

  }



teleponDokter(){
	this.callNumber.callNumber(String(this.telephone) , true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}

  gotoSettings(){
    this.navCtrl.push(PengaturanPasien);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }
  profildokter(){
    this.navCtrl.push(ProfilDokterPasien);
  }

}
