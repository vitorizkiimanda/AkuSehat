import { Component } from '@angular/core';
import {  NavController, NavParams , App,LoadingController } from 'ionic-angular';
import { Login } from '../login/login';
import { MyApp } from '../../app/app.component.ts';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { Vibration } from '@ionic-native/vibration';
import { ModalController } from 'ionic-angular';
import { ThemeDoctorPage } from '../theme-doctor/theme-doctor';

@Component({
  selector: 'page-pengaturan-dokter',
  templateUrl: 'pengaturan-dokter.html',
})
export class PengaturanDokter {

  theme:string;
 

  id_doctor:number;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController,private vibration: Vibration,public http: Http,public data: Data, public alertCtrl: AlertController, public app: App, public navParams: NavParams,public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanDokter');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getDataDokter().then((data) => {
     
      this.id_doctor = data.id_doctor;
       this.theme= data.theme;
      
    })

  }

  presentModal() {
    this.navCtrl.push(ThemeDoctorPage);
    // let modal = this.modalCtrl.create(ThemeDoctorPage);
    // modal.present();
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


