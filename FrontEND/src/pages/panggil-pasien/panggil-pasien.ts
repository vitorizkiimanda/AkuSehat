import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-panggil-pasien',
  templateUrl: 'panggil-pasien.html',
})
export class PanggilPasien {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanggilPasien');
  }

}
