import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EditProfilPasien } from '../edit-profil-pasien/edit-profil-pasien';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';


@Component({
  selector: 'page-profil-pasien',
  templateUrl: 'profil-pasien.html',
})
export class ProfilPasien {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasien');
  }

  editProfil(){
  	this.navCtrl.push(EditProfilPasien);
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
