import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { SignupPasien } from '../signup-pasien/signup-pasien';


/**
 * Generated class for the LoginPasien page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-pasien',
  templateUrl: 'login-pasien.html',
})
export class LoginPasien {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPasien');
  }

  gotoTab(){
  	this.navCtrl.push(TabsPage);
  }

  signUp(){
  	this.navCtrl.push(SignupPasien);
  }

}
