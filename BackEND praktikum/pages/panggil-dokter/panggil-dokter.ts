import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the PanggilDokter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-panggil-dokter',
  templateUrl: 'panggil-dokter.html',
})
export class PanggilDokter {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanggilDokter');
  }


teleponDokter(){
	let alert = this.alertCtrl.create({
      title: 'COMING SOON!',
      buttons: ['OK']
    });
    alert.present();

  }
}
