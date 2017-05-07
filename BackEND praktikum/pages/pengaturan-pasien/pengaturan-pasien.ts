import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';

/**
 * Generated class for the PengaturanPasien page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pengaturan-pasien',
  templateUrl: 'pengaturan-pasien.html',
})
export class PengaturanPasien {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPasien');
  }

  signout(){
  	this.navCtrl.push(Login);
  }

}
