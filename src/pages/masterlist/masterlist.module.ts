import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { masterlistPage } from './masterlist';
import { DetailsListPage } from '../detailslist/details-list';

@NgModule({
  declarations: [
    masterlistPage,
    DetailsListPage
  ],
  imports: [
    IonicPageModule.forChild(masterlistPage),
  ],
  entryComponents: [
    masterlistPage,
    DetailsListPage
  ],
  exports: [
    masterlistPage,
    DetailsListPage
  ]
})
export class MasterDetailModule {}
