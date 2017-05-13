import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Beranda } from '../beranda/beranda';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import {LocalNotifications} from 'ionic-native';

@Component({
  selector: 'page-isi-data',
  templateUrl: 'isi-data.html',
})
export class IsiData {

  submitted= false;
  date_daily: string;
  sistol: number;
  duration: number;
  description: string; 
  diastol: number;

  id_patient:number;

  constructor(public navCtrl: NavController,
  public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data) {
    LocalNotifications.on("click", (notification, state) => {
            let alert = alertCtrl.create({
                title: "Notification Clicked",
                subTitle: "You just clicked the scheduled notification",
                buttons: ["OK"]
            });
            // this.navCtrl.present(alert);
            this.navCtrl.push(IsiData);
            alert.present();
        });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad IsiData');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.id_patient = data.id_patient;
    })

  }

  simpanData(form: NgForm){
    this.submitted = true;
    if(form.valid){
      let input = JSON.stringify({
        date_daily: this.date_daily,
        sistol: this.sistol,
        duration: this.duration,
        description: this.description, 
        diastol: this.diastol
      });
        this.http.post(this.data.BASE_URL+"/daily_health.php?patient="+this.id_patient,input).subscribe(data => {
        let response = data.json();
  	if(response.status=="200"){
        //console.log(response);
        //this.data.login(response.data);

        let alert = this.alertCtrl.create({
          title: 'Data Tersimpan!',
          buttons: ['OK']
        });
        alert.present();

        this.navCtrl.push(Beranda);
      }
      else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal',
                subTitle: 'silahkan coba lagi',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
    }
  }

  

doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanPasien);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }
  profildokter(){
    this.navCtrl.push(ProfilDokterPasien);
  }

}


