import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsDokter } from './tabs-dokter';

@NgModule({
  declarations: [
    TabsDokter,
  ],
  imports: [
    IonicPageModule.forChild(TabsDokter),
  ],
  exports: [
    TabsDokter
  ]
})
export class TabsDokterModule {}
