import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { SignupPasien } from '../signup-pasien/signup-pasien';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-login-pasien',
  templateUrl: 'login-pasien.html',
})
export class LoginPasien {

  email:string;
  password:string;
  
  constructor(public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data) {
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

  masuk(){

    let input = JSON.stringify({
        email: this.email, 
        password: this.password
        
      });
console.log(input);
    this.http.post(this.data.BASE_URL+"/test/login_patients.php", input).subscribe(data => {
           
           let response = data.json();
           
           if(response.status=="200"){
             //storage data local di ionicnya dari data base
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
              alert.present();
           }
           console.log(response);
           console.log(data);
        }, err => { 
           
        });

  }
  
}
