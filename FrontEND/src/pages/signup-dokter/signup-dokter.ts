import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginDokter } from '../login-dokter/login-dokter';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-signup-dokter',
  templateUrl: 'signup-dokter.html',
})
export class SignupDokter {

  name:string;
  email:string;
  password:string;
  password2:string;
  sex:string;
  telephone:string;
  address:string;
  bank:string;
  bank_number:number;
  specialization:string;
  patients_max:number;
  experience:string;
  hospital:string;
  educational_background:string;


  submitted= false;
  submitted2= true;


  constructor(private vibration: Vibration,public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupDokter');
  }

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Kamu Terdaftar!',
      subTitle: 'Harap lengkapi profil.',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(LoginDokter);
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
        patients_max:this.patients_max,
        experience:this.experience,
        hospital:this.hospital,
        educational_background:this.educational_background

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



  signup(form: NgForm){ 
    this.submitted = true;
    if(form.valid){
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

      if(this.password==this.password2){
        this.http.post(this.data.BASE_URL+"/register_doctors.php",input).subscribe(data => {
        let response = data.json();
	  if(response.status=="200"){

       
       // this.data.login(response.data);
        this.akunBaru();
      }
      else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun',
                subTitle: 'Periksa kembali data.',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
    }
    else {
        this.vibration.vibrate(1000);
        this.submitted2 = false;
      }
    }
  }





}
