import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPasien } from '../login-pasien/login-pasien';
import { LoginDokter } from '../login-dokter/login-dokter';
import { Http,Headers,RequestOptions } from '@angular/http';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { BackgroundMode } from '@ionic-native/background-mode';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(private backgroundMode: BackgroundMode, public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    

  }

  ionViewWillEnter() {
  this.backgroundMode.enable();

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


  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }



}
