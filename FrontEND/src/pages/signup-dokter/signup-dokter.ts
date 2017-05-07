import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsDokter } from '../tabs-dokter/tabs-dokter';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-signup-dokter',
  templateUrl: 'signup-dokter.html',
})
export class SignupDokter {

  name:string;
  email:string;
  password:string;
  sex:string;
  telephone:string;
  address:string;
  bank:string;
  bank_number:number;
  specialization:string;
  patients_max:number;


  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupDokter');
  }

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Kamu Terdaftar!',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(TabsDokter);
  }

  daftar(){

    let input = JSON.stringify({


        name:this.name,
        email:this.email,
        password:this.password,
        sex:this.sex,
        telephone:this.telephone,
        address:this.address,
        bank:this.bank,
        bank_number:this.bank_number,
        specialization:this.specialization,
        patients_max:this.patients_max

      });
console.log(input);
    this.http.post(this.data.BASE_URL+"/register_doctors.php", input).subscribe(data => {
           console.log(data);
           let response = data.json();
           
           if(response.status=="200"){
             this.akunBaru();
           }
           else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun!',
                subTitle: 'Periksa kembali data.',      
                buttons: ['OK']
              });
              alert.present();
           }
           console.log(response);
           
        }, err => { 
           
        });

  }

}
