import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';


@Component({
  selector: 'page-panggil-dokter',
  templateUrl: 'panggil-dokter.html',
})
export class PanggilDokter {

  constructor(public navCtrl: NavController, private callNumber: CallNumber,public alertCtrl: AlertController , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanggilDokter');
  }


teleponDokter(){
	this.callNumber.callNumber('18001010101', true)
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
