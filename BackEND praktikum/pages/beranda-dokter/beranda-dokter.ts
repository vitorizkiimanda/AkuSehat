import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the BerandaDokter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-beranda-dokter',
  templateUrl: 'beranda-dokter.html',
})
export class BerandaDokter {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaDokter');
  }
  teleponPasien(){
	let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Menelepon pasien ...',
      buttons: ['OK']
    });
    alert.present();

  }
}
