import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-aku-sehat',
  templateUrl: 'aku-sehat.html',
})
export class AkuSehat {

   theme: string;
   
  constructor(public data: Data,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AkuSehat');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getDataPasien().then((data) => {
    
      this.theme= data.theme;

    })

  }

}
