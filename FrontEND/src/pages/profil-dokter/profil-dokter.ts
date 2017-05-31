import { Component } from '@angular/core';
import {  NavController, NavParams,ActionSheetController,App,LoadingController } from 'ionic-angular';
import { EditProfilDokter } from '../edit-profil-dokter/edit-profil-dokter';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';
import { MyApp } from '../../app/app.component.ts';

@Component({
  selector: 'page-profil-dokter',
  templateUrl: 'profil-dokter.html',
})
export class ProfilDokter {

  profilDokter: any;
  profilDokterSum : any;
    name :string;
    email :string;
    no_tel_doctor :number;
    id_doctor:number;
    bank_doctor:string;
    no_account_doctor :number;
    specialization :string;
    sum_patient:string;

    theme:string;
    photo:string;
    profile_pict_doct
    base64Image: string;

  constructor(public http: Http, public data: Data,public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams,private camera: Camera,public actionSheetCtrl: ActionSheetController,public loadCtrl: LoadingController,private vibration: Vibration,public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilDokter');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataDokter().then((data) => {
      this.name = data.name_doctor;
      this.email = data.email_doctor;
      this.no_tel_doctor = data.no_tel_doctor;
      this.id_doctor = data.id_doctor;
      this.bank_doctor = data.bank_doctor;
      this.no_account_doctor = data.no_account_doctor;
      this.specialization = data.specialization;
      this.sum_patient = data.sum_patient;
      this.theme= data.theme;
      this.photo = this.data.BASE_URL+data.profile_pict_doct;
      this.profile_pict_doct = data.profile_pict_doct;

      this.getProfilDokter();
      this.getProfilDokterSum();
    })

    

  }


   getProfilDokter(){
    this.http.get(this.data.BASE_URL+"/profile_doctor.php?doctor="+this.id_doctor).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.profilDokter= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  getProfilDokterSum(){
    this.http.get(this.data.BASE_URL+"/profile_doctor_sum.php?doctor="+this.id_doctor).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.profilDokterSum= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  editProfil(){
  	this.navCtrl.push(EditProfilDokter);
  }

  editFoto(){
    let alert = this.alertCtrl.create({
      title: 'Belum bisa ubah foto profil.',
      buttons: ['OK']
    });
    alert.present();

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


  takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      this.base64Image = imageData;
      this.uploadFoto();
      }, (err) => {
    });
  }
  getPhotoFromGallery(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      this.base64Image = imageData;
      this.uploadFoto();
      }, (err) => {
    });
  }
  updatePicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }


   uploadFoto(){
    
    let loading = this.loadCtrl.create({
        content: 'mengunggah..'
    });
      
      loading.present();
      // alert(this.base64Image);
      let input = JSON.stringify({
        file: this.base64Image
      });
        this.http.post(this.data.BASE_URL+"/base64decode_doctor.php?doctor="+this.id_doctor,input).subscribe(data => {
        let response = data.json();
        // alert(response);
	    if(response.status=="200"){
        console.log(response);
        this.data.logout();
        this.app.getRootNav().setRoot(MyApp);
        loading.dismiss();
        
        
        let alert = this.alertCtrl.create({
                title: 'Foto profil terunggah',
                subTitle: 'silahkan masuk',      
                buttons: ['OK']
              });
              alert.present();
      }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Proses Gagal',
                subTitle: 'silahkan coba lagi',      
                buttons: ['OK']
              });
              this.vibration.vibrate(1000);
              alert.present();
              
           }

      });
    }




}
