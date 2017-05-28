import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
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
  telephone:number;
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

  isValidFormTelephone= true;
  isValidFormNorek= true;
  isValidFormPasienMax= true;

  constructor(private vibration: Vibration,public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data,public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupDokter');
  }

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Selamat Kamu Terdaftar!',
      subTitle: 'silahkan login.',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(LoginDokter);
  }

  checkTelephone(){
    console.log(this.telephone);
    if(this.telephone<0){
      this.isValidFormTelephone=false;
      // this.telephoneMessage = "Jangan minus coy";
    } else {
      // this.telephoneMessage=null;
      this.isValidFormTelephone=true;
    }

  }

  checkRekening(){
    console.log(this.bank_number);
    if(this.bank_number<0){
      this.isValidFormNorek=false;
      // this.ageMessage = "Jangan minus coy";
    } else {
      // this.telephoneMessage=null;
      this.isValidFormNorek=true;
    }

  }

  checkPasienmax(){
    console.log(this.patients_max);
    if(this.patients_max<0){
      this.isValidFormPasienMax=false;
    } else {
      this.isValidFormPasienMax=true;
    }
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
    let loading = this.loadCtrl.create({
        content: 'mendaftarkan..'
    });

    this.submitted = true;
    this.checkTelephone();
    this.checkRekening();
    this.checkPasienmax();
    if(form.valid && this.isValidFormTelephone && this.isValidFormNorek && this.isValidFormPasienMax){
      loading.present();
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

      if(this.password==this.password2){
        this.http.post(this.data.BASE_URL+"/register_doctors.php",input).subscribe(data => {
        let response = data.json();
	  if(response.status=="200"){

       
       // this.data.login(response.data);
        this.akunBaru();
        loading.dismiss();
      }
      else if(response.status=="409"){
             loading.dismiss();
             this.vibration.vibrate(1000);
             let alert = this.alertCtrl.create({
                title: 'Email sudah terdaftar',
                subTitle: 'Silahkan pilih email lain.',      
                buttons: ['OK']
              });
              alert.present();
      }
      else
           {
             loading.dismiss();
             this.vibration.vibrate(1000);
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
        loading.dismiss();
        this.vibration.vibrate(1000);
        let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun',
                subTitle: 'Periksa kembali data.',      
                buttons: ['OK']
              });
              alert.present();
        this.submitted2 = false;
      }
    }

    else
    {
            loading.dismiss();
            this.vibration.vibrate(1000);
             let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun',
                subTitle: 'Periksa kembali data.',      
                buttons: ['OK']
              });
              alert.present();
    }

  }





}
