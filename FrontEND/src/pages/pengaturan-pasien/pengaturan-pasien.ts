import { Component } from '@angular/core';
import {  NavController, NavParams,App } from 'ionic-angular';
import { Login } from '../login/login';
import { MyApp } from '../../app/app.component.ts';
import { AlertController } from 'ionic-angular';

import {LocalNotifications} from 'ionic-native';

@Component({
  selector: 'page-pengaturan-pasien',
  templateUrl: 'pengaturan-pasien.html',
})
export class PengaturanPasien {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public app: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPasien');
  }

  public schedule() {
        LocalNotifications.schedule({
            title: "Test Title",
            text: "Delayed Notification",
            at: new Date(new Date().getTime() + 5 * 1000),
            sound: null
        });
    }
  signout(){
    let confirm = this.alertCtrl.create({
      title: 'Apakah Anda Yakin?',
      subTitle: 'Keluar dari akun akan menghapus semua data yang belum tersimpan.',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked'),
            this.app.getRootNav().setRoot(MyApp);
          }
        }
      ]
    });
    confirm.present();
  }

}
