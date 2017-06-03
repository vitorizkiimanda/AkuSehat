import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { SignupPasien } from '../signup-pasien/signup-pasien';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';
import { PilihDokterLagiPage } from '../pilih-dokter-lagi/pilih-dokter-lagi';

@Component({
  selector: 'page-login-pasien',
  templateUrl: 'login-pasien.html',
})
export class LoginPasien {

  email:string;
  password:string;
  submitted = false;
  status:string;
  lihat = true;
  
  constructor(private vibration: Vibration,public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data,public loadCtrl: LoadingController) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPasien');
    this.status = "password";
  }
  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  gotoTab(){
  	this.navCtrl.setRoot(TabsPage);
  }
  gotoPilihDokter(){
    this.navCtrl.setRoot(PilihDokterLagiPage);
  }

  signUp(){
  	this.navCtrl.push(SignupPasien);
  }

  login(form: NgForm){
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    if(form.valid){
      loading.present();
      let input = JSON.stringify({
        email: this.email, 
        password: this.password
      });
        this.http.post(this.data.BASE_URL+"/login_patients.php",input).subscribe(data => {
        let response = data.json();
        
	if(response.status=="200"){
        //console.log(response);
        this.data.login(response.data,"pasien");//input data ke local storage
        this.gotoTab();
        loading.dismiss();
      }
      else if(response.status=="503"){
        this.data.login(response.data,"pasien");
        this.gotoPilihDokter();
        loading.dismiss();
      
      }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              this.vibration.vibrate(1000);
              alert.present();
           }

      });
    }
  }




  lupaPassword(){
             let alert = this.alertCtrl.create({
                title: 'Hubungi Admin',
                subTitle: 'Nuh  : @nuhsat <br> Fatim  : @haefa',      
                buttons: ['OK']
              });
              alert.present();
           }
  
}
