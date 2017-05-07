import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the SignupPasien page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup-pasien',
  templateUrl: 'signup-pasien.html',
})
export class SignupPasien {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPasien');
  }

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Kamu Terdaftar!',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(TabsPage);
  }

}
