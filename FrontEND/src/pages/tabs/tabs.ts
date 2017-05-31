import { Component } from '@angular/core';

import { Beranda } from '../beranda/beranda';
import { IsiData } from '../isi-data/isi-data';
import { PanggilDokter } from '../panggil-dokter/panggil-dokter';
import { Bayar } from '../bayar/bayar';
import { ProfilPasien } from '../profil-pasien/profil-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  theme: string;

  tab1Root = Beranda;
  tab2Root = ProfilPasien;
  tab3Root = IsiData;
  // tab4Root = Bayar;
  tab4Root = PanggilDokter;

  constructor(public data: Data,public http: Http) {

  }

   ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getDataPasien().then((data) => {
    
      this.theme= data.theme;
      
    })

  }



}
