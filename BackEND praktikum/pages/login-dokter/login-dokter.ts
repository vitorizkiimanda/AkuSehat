import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BerandaDokter } from '../beranda-dokter/beranda-dokter';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginDokter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-dokter',
  templateUrl: 'login-dokter.html',
})
export class LoginDokter {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginDokter');
  }

  gotoTab(){
    this.navCtrl.push(BerandaDokter);
  }

  signUp(){
	let alert = this.alertCtrl.create({
      title: 'Silahkan Coba Lagi!',
      subTitle: '',
      
    });
    alert.present();

  }
}
