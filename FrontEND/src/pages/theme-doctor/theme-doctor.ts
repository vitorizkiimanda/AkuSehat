import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,App } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { MyApp } from '../../app/app.component.ts';
import { Login } from '../login/login';

@Component({
  selector: 'page-theme-doctor',
  templateUrl: 'theme-doctor.html'
})
export class ThemeDoctorPage {

  id_doctor:number;
  theme:string;

  constructor(public app: App,public loadCtrl: LoadingController,private vibration: Vibration,public alertCtrl: AlertController,public http: Http,public data: Data,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getDataPasien().then((data) => {
     
      this.id_doctor = data.id_doctor;
       this.theme= data.theme;
      
    })

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
        this.http.post(this.data.BASE_URL+"/choose_theme_doctor.php?doctor="+this.id_doctor,input).subscribe(data => {
        let response = data.json();
        // console.log(response);

      if(response.status=="200"){
        // console.log(this.theme);
        
        console.log(input);
        
        this.data.login(response.data,"dokter");
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

