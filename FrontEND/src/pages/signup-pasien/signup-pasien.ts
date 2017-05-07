import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-signup-pasien',
  templateUrl: 'signup-pasien.html',
})
export class SignupPasien {

  name:string;
  email:string;
  password:string;
  sex:string;
  telephone:string;
  address:string;



  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public navParams: NavParams, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPasien');
  }

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Kamu Terdaftar!',
      subTitle: 'Harap lengkapi profil.',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(TabsPage);
  }

  daftar(){

    let input = JSON.stringify({

        name:this.name,
        email:this.email,
        password:this.password,
        sex:this.sex,
        telephone:this.telephone,
        address:this.address

      });
console.log(input);
    this.http.post(this.data.BASE_URL+"/test/register_patients.php", input).subscribe(data => {
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
