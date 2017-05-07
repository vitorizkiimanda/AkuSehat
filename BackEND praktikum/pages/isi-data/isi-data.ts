import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Beranda } from '../beranda/beranda';

/**
 * Generated class for the IsiData page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-isi-data',
  templateUrl: 'isi-data.html',
})
export class IsiData {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IsiData');
  }


  simpanData(){
  	let alert = this.alertCtrl.create({
      title: 'Data Tersimpan!',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.push(Beranda);
  }


doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}


