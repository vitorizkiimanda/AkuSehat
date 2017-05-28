import { Component } from '@angular/core';
import {  NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { EditProfilPasien } from '../edit-profil-pasien/edit-profil-pasien';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { TambahRiwayatPage } from '../tambah-riwayat/tambah-riwayat';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';



declare var cordova: any;

@Component({
  selector: 'page-profil-pasien',
  templateUrl: 'profil-pasien.html',
})
export class ProfilPasien {

  theme:string;

  history: any;
  history2: any;

  lastImage: any;
  loading: any;


  id_doctor:number;
  email:string;
  password:string;
  name:string;
  id_patient:number;
  address_patient:string;

  no_tel_patient:number;
  name_doctor:string;

  constructor(public navCtrl: NavController,public http: Http, public data: Data, public alertCtrl: AlertController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath,public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasien');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.name = data.name_patient;
      this.email = data.email_patient;
      this.no_tel_patient = data.no_tel_patient;
      this.address_patient = data.address_patient;
      this.name_doctor = data.name_doctor;
      this.id_patient = data.id_patient;
      this.theme= data.theme;
      //this.id_doctor = data.id_doct;
      
      this.getRiwayatKesehatan();
      this.getDataHistory();
    })
    

  }

  editProfil(){
  	this.navCtrl.push(EditProfilPasien);
  }

  editFoto(){
    let alert = this.alertCtrl.create({
      title: 'Belum bisa ubah foto profil.',
      buttons: ['OK']
    });
    alert.present();

  }

  tambahRiwayat(){
    this.navCtrl.push(TambahRiwayatPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanPasien);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }
  profildokter(){
    this.navCtrl.push(ProfilDokterPasien);
  }


  getRiwayatKesehatan(){


    // nah ini nnti dipisah aja jadi 2 ,, eheheheh 


    this.http.get(this.data.BASE_URL+"/health_history.php?patient="+this.id_patient).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.history= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  getDataHistory(){
    this.http.get(this.data.BASE_URL+"/patient_disease.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.history2 = response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }



   public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilih Sumber Gambar',
      buttons: [
        {
          text: 'Dari album lokal',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Ambil gambar baru',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }



  public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Terjadi kesalahan saat memilih gambar.');
  });
}



// Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Terjadi kesalahan saat menyimpan gambar.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}



public uploadImage() {
  // Destination URL
  var url = this.data.BASE_URL+"/upload.php";
 
  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);
 
  // File name only
  var filename = this.lastImage;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
 
  const fileTransfer: TransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file.');
  });
}





}
