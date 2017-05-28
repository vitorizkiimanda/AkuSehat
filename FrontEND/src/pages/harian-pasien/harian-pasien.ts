import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';

import * as moment from 'moment';
import { AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

var dateNow = new Date();

@Component({
  selector: 'page-harian-pasien',
  templateUrl: 'harian-pasien.html'
})
export class HarianPasienPage {

  daily: any;
  
  id_doctor:number;
  no_tel_patient:number;
  email:string;
  name:string;
  id_patient:number;
  address_patient:string;
  date_daily:string;
  // date_daily_update:string;
  
  theme: string;
  

  constructor(private vibration: Vibration,public navCtrl: NavController,public data: Data,public http: Http, public navParams: NavParams,public alertCtrl: AlertController,public loadCtrl: LoadingController) {

    let pasien = this.navParams.data; //ngambil data yang dikirim

    this.email = pasien.email_patient;
    this.name = pasien.name_patient;
    this.address_patient = pasien.address_patient;
    this.no_tel_patient = pasien.no_tel_patient;
    this.id_patient = pasien.id_patient;

    this.getDataKesehatan();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HarianPasienPage');
  }

  ionViewWillEnter() {
    var now = moment();
    this.date_daily = moment(now.format(), moment.ISO_8601).format();
    this.data.getDataDokter().then((data) => {
    
      this.theme= data.theme;

    })
    
  }
  changeDateFilter(date){
    this.date_daily = moment(date).format('01-MM-YYYY');
    // this.date_daily_update = this.date_daily;
    console.log(this.date_daily);
    this.getDataKesehatanUpdate();
    }

   getDataKesehatanUpdate(){

     let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
     loading.present();
    let input = JSON.stringify({
       date_daily:this.date_daily
       
        // date_daily: dateNow,
      });
        this.http.post(this.data.BASE_URL+"/home_daily_health.php?patient="+this.id_patient,input).subscribe(data => {
        let response = data.json();

      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
        console.log(this.date_daily);
    }
    else{
      
      this.daily=null; //untuk menghilankan tampilan dta sebelumnya
      loading.dismiss();
       let alert = this.alertCtrl.create({
          title: 'Data Tidak Ditemukan',
          subTitle: 'Silahkan pilih bulan atau tahun lain',
          buttons: ['OK']
          });
          alert.present();
          this.vibration.vibrate(1000);
    }
    });
  }


   getDataKesehatan(){
     
    let input = JSON.stringify({
        // date_daily:this.date_daily
        date_daily: dateNow,
      });
        this.http.post(this.data.BASE_URL+"/home_daily_health.php?patient="+this.id_patient,input).subscribe(data => {
        let response = data.json();

      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
        console.log(this.date_daily);
     }
    });
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this. getDataKesehatan();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



}
