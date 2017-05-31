import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-beranda-dokter',
  templateUrl: 'beranda-dokter.html',
})
export class BerandaDokter {

  theme: string;
  photo:string;
  profile_pict_doct:string;

  pasien: any;
  name:string;
  specialization:string;
  email:string;
  id_doctor:number;
  bank_number:number;
  bank:string;
  telephone:number;
  sum:number;
  no_tel_patient:number;

  nomor:number;
  


  constructor(private callNumber: CallNumber,public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public http: Http, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaDokter');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataDokter().then((data) => {
      console.log(data);
      this.name = data.name_doctor;
      this.specialization = data.specialization;
      // this.email = data.email_doctor;
      this.id_doctor = data.id_doctor;
      this.theme= data.theme;
      this.photo = this.data.BASE_URL+data.profile_pict_doct;
      this.profile_pict_doct = data.profile_pict_doct;
      // this.bank_number = data.no_account_doctor;
      // this.telephone = data.no_tel_doctor;
      // this.bank = data.bank_doctor;
      // this.sum = data.sum_patient;
      this.getDataPasien();

    });
    
    
    
  }



  teleponPasien(nomor){
    console.log(nomor);
	this.callNumber.callNumber(String(nomor) , true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanDokter);
  }


  getDataPasien(){
    this.http.get(this.data.BASE_URL+"/user.php?doctor="+this.id_doctor).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.pasien= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }
  



}
