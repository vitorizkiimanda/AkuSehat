import { Component } from '@angular/core';
import {  NavController, NavParams , App } from 'ionic-angular';
import { Login } from '../login/login';
import { MyApp } from '../../app/app.component.ts';
import { AlertController } from 'ionic-angular';


import { Data } from '../../providers/data';

@Component({
  selector: 'page-pengaturan-dokter',
  templateUrl: 'pengaturan-dokter.html',
})
export class PengaturanDokter {

  constructor(public navCtrl: NavController,public data: Data, public alertCtrl: AlertController, public app: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanDokter');
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
            this.data.logout();
            this.app.getRootNav().setRoot(MyApp);
          }
        }
      ]
    });
    confirm.present();
  }
}


