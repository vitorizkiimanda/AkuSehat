import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-profil-dokter-pasien',
  templateUrl: 'profil-dokter-pasien.html',
})
export class ProfilDokterPasien {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilDokterPasien');
  }

  

}
