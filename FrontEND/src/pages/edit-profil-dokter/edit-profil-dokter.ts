import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ProfilDokter } from '../profil-dokter/profil-dokter';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-edit-profil-dokter',
  templateUrl: 'edit-profil-dokter.html',
})
export class EditProfilDokter {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilPasien');
  }

  simpanProfil(){

  let alert = this.alertCtrl.create({
      title: 'Data Tersimpan!',
      buttons: ['OK']
    });
    alert.present();

  	this.navCtrl.push(ProfilDokter);
  }

}
