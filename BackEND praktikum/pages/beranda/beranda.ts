import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilPasien } from '../profil-pasien/profil-pasien';
import { Bayar } from '../bayar/bayar';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';


@Component({
  selector: 'beranda',
  templateUrl: 'beranda.html'
})
export class Beranda {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  nextProfil(){
  	this.navCtrl.push(ProfilPasien);
  }

  profildokter(){
    this.navCtrl.push(ProfilDokterPasien);
  }

  nextBayar(){
  	this.navCtrl.push(Bayar);
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  gotoSettings(){
    this.navCtrl.push(PengaturanPasien);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

}