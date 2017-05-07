import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPasien } from '../login-pasien/login-pasien';
import { LoginDokter } from '../login-dokter/login-dokter';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  showBantuan(){
	let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Pilih PASIEN jika anda pasien. Pilih DOKTER jika anda dokter.',
      buttons: ['OK']
    });
    alert.present();

  }

  loginPasien(){
  	this.navCtrl.push(LoginPasien);
  }

  loginDokter(){
  	this.navCtrl.push(LoginDokter);
  }

}
