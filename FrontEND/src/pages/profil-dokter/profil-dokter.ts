import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EditProfilDokter } from '../edit-profil-dokter/edit-profil-dokter';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';


@Component({
  selector: 'page-profil-dokter',
  templateUrl: 'profil-dokter.html',
})
export class ProfilDokter {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilDokter');
  }

  editProfil(){
  	this.navCtrl.push(EditProfilDokter);
  }

  editFoto(){
    let alert = this.alertCtrl.create({
      title: 'Belum bisa ubah foto profil.',
      buttons: ['OK']
    });
    alert.present();

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanDokter);
  }

}
