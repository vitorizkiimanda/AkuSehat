import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

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

  constructor(public navCtrl: NavController,public data: Data,public http: Http, public navParams: NavParams) {

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


   getDataKesehatan(){
    this.http.get(this.data.BASE_URL+"/home_daily_health.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
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
