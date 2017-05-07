import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProfilPasien } from '../edit-profil-pasien/edit-profil-pasien';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profil-pasien',
  templateUrl: 'profil-pasien.html',
})
export class ProfilPasien {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasien');
  }

  editProfil(){
  	this.navCtrl.push(EditProfilPasien);
  }

  editFoto(){
    let alert = this.alertCtrl.create({
      title: 'Belum bisa ubah foto profil.',
      buttons: ['OK']
    });
    alert.present();

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
