import { Component } from '@angular/core';

import { Beranda } from '../beranda/beranda';
import { IsiData } from '../isi-data/isi-data';
import { PanggilDokter } from '../panggil-dokter/panggil-dokter';
import { Bayar } from '../bayar/bayar';
import { ProfilPasien } from '../profil-pasien/profil-pasien';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Beranda;
  tab2Root = ProfilPasien;
  tab3Root = IsiData;
  tab4Root = Bayar;
  tab5Root = PanggilDokter;

  constructor() {

  }
}
