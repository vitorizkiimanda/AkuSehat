import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-profil-pasien-dokter',
  templateUrl: 'profil-pasien-dokter.html',
})
export class ProfilPasienDokter {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasienDokter');
  }

}
