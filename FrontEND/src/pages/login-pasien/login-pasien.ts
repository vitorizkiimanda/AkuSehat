import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { SignupPasien } from '../signup-pasien/signup-pasien';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-login-pasien',
  templateUrl: 'login-pasien.html',
})
export class LoginPasien {

  email:string;
  password:string;
  submitted = false;
  
  constructor(private vibration: Vibration,public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPasien');
  }

  gotoTab(){
  	this.navCtrl.push(TabsPage);
  }

  signUp(){
  	this.navCtrl.push(SignupPasien);
  }

  login(form: NgForm){
    this.submitted = true;
    if(form.valid){
      let input = JSON.stringify({
        email: this.email, 
        password: this.password
      });
        this.http.post(this.data.BASE_URL+"/login_patients.php",input).subscribe(data => {
        let response = data.json();
	if(response.status=="200"){
        //console.log(response);
        this.data.login(response.data);
        this.gotoTab();
      }
      else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah!',      
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
