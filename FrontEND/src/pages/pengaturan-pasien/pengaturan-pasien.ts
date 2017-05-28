import { Component } from '@angular/core';
import {  NavController, NavParams,App,LoadingController } from 'ionic-angular';
import { Login } from '../login/login';
import { MyApp } from '../../app/app.component.ts';
import { AlertController } from 'ionic-angular';

import {LocalNotifications} from 'ionic-native';
import { TabsPage } from '../tabs/tabs';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { Vibration } from '@ionic-native/vibration';
import { ModalController } from 'ionic-angular';
import { ThemePage } from '../theme/theme';

@Component({
  selector: 'page-pengaturan-pasien',
  templateUrl: 'pengaturan-pasien.html',
})
export class PengaturanPasien {

  theme:string;
 

  id_patient:number;

  constructor(public modalCtrl: ModalController,private vibration: Vibration,public http: Http,public navCtrl: NavController, public data : Data,public alertCtrl: AlertController, public app: App, public navParams: NavParams,public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengaturanPasien');
    this.data.getDataPasien().then((data) => {
     
      this.id_patient = data.id_patient;
       this.theme= data.theme;
      
    })
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    

  }
  presentModal() {
    this.navCtrl.push(ThemePage);
    // let modal = this.modalCtrl.create(ThemePage);
    // modal.present();
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
            this.data.logout();
            this.app.getRootNav().setRoot(MyApp);
          }
        }
      ]
    });
    confirm.present();
  }

   gotoTab(){
  	this.navCtrl.setRoot(TabsPage);
  }


  kirimTema(warna)
  {
     let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
     loading.present();
    let input = JSON.stringify({
        
        theme:warna

      });
        this.http.post(this.data.BASE_URL+"/choose_theme_patient.php?patient="+this.id_patient,input).subscribe(data => {
        let response = data.json();
        // console.log(response);

      if(response.status=="200"){
        // console.log(this.theme);
        
        console.log(input);
        
        this.data.login(response.data,"pasien");
        // this.ionViewWillEnter(); 
        this.data.logout();
        this.app.getRootNav().setRoot(MyApp);
        let alert = this.alertCtrl.create({
          title: 'Berhasil Merubah Tema',
          subTitle: 'Silahkan masuk kembali',
          buttons: ['OK']
          });
          alert.present();
        loading.dismiss();
    }
    else{
      
      
      loading.dismiss();
       let alert = this.alertCtrl.create({
          title: 'Gagal Merubah Tema',
          subTitle: 'Silahkan coba lagi',
          buttons: ['OK']
          });
          alert.present();
          this.vibration.vibrate(1000);
    }
    });
  }
}
