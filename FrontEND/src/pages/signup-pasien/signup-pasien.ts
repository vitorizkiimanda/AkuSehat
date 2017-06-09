import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import { LoginPasien } from '../login-pasien/login-pasien';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';
import { SignupPasien2Page } from '../signup-pasien-2/signup-pasien-2';

@Component({
  selector: 'page-signup-pasien',
  templateUrl: 'signup-pasien.html',
})
export class SignupPasien {

  dokter:any;
  

  testRadioOpen: boolean;
  testRadioResult;

  name:string;
  email:string;
  password:string;
  password2:string;
  sex:string;
  telephone:number;
  telephoneMessage:string;
  address:string;
  choose_doctor:string;

  age:number;
  weight:number;
  height:number;
  allergy:string;
  disability:string;
  operation:string;
  description:string;
  
  
  submitted= false;
  submitted2= true;

  isValidFormTelephone= true;
  isValidFormUmur= true;
  isValidFormBB= true;
  isValidFormTB= true;
  isValidFormChoose = false;

  constructor(private vibration: Vibration,public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public navParams: NavParams, public data: Data,public loadCtrl: LoadingController) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPasien');
    
  }
  
  ionViewWillEnter() {
    this.pilih_doctor();
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

  checkUmur(){
    console.log(this.age);
    if(this.age<0){
      this.isValidFormUmur=false;
      // this.ageMessage = "Jangan minus coy";
    } else {
      // this.telephoneMessage=null;
      this.isValidFormUmur=true;
    }

  }

  checkBB(){
    console.log(this.weight);
    if(this.weight<0){
      this.isValidFormBB=false;
    } else {
      this.isValidFormBB=true;
    }
  }

  checkTB(){
    console.log(this.height);
    if(this.height<0){
      this.isValidFormTB=false;
    } else {
      this.isValidFormTB=true;
    }
  }
  checkDokter(){
    this.isValidFormChoose=true;
    
  }
  

  pilih_doctor(){
    this.http.get(this.data.BASE_URL+"/choose_doctor.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.dokter= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }
  

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Selamat Kamu Terdaftar!',
      subTitle: 'silahkan login.',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(LoginPasien);
  }

  daftar(){

    let input = JSON.stringify({

        name:this.name,
        email:this.email,
        password:this.password,
        sex:this.sex,
        telephone:this.telephone,
        address:this.address,
        age:this.age,
        weight:this.weight,
        height:this.height,
        allergy:this.allergy,
        operation:this.operation,
        disability:this.disability,
        description:this.description,
        choose_doctor:this.choose_doctor
        

      });
console.log(input);
    this.http.post(this.data.BASE_URL+"/register_patients.php", input).subscribe(data => {
           console.log(data);
           let response = data.json();
           
           if(response.status=="200"){

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





  nextSignup(form: NgForm){

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    this.submitted = true;
    this.checkTelephone();
    

    if(form.valid  && this.isValidFormTelephone){
      let input = JSON.stringify({
        name:this.name,
        email:this.email,
        password:this.password,
        sex:this.sex,
        telephone:this.telephone,
        address:this.address,

      });
      if(this.password==this.password2){
        console.log(input);

          
        loading.present();   
        let mail = JSON.stringify({
        email:this.email,
        
        });
        
        this.http.post(this.data.BASE_URL+"/register_patients_email.php",mail).subscribe(data => {
        let response = data.json();
        console.log(input);
        
	  if(response.status=="200"){

       loading.dismiss();
       this.navCtrl.push(SignupPasien2Page, input);
        
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
                title: 'Proses Gagal',
                subTitle: 'Periksa kembali data',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
      }
    }
    else if(!this.isValidFormChoose)
    {
      
            this.vibration.vibrate(1000);
             let alert = this.alertCtrl.create({
                title: 'Lengkapi Data',
                subTitle: 'Harap isi data dengan benar',      
                buttons: ['OK']
              });
              alert.present();
    }
    else
    {
           
            this.vibration.vibrate(1000);
             let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun',
                subTitle: 'Periksa kembali data',      
                buttons: ['OK']
              });
              alert.present();
    }

  }


}
