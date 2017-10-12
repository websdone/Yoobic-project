import { ApiData } from '../shared/apidata.service';
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DetailsListPage } from '../detailslist/details-list';

@IonicPage()

@Component({
  selector: 'page-master',
  templateUrl: 'masterList.html',
  providers: [ ApiData ]
})
export class masterlistPage {
  @ViewChild(Content) content: Content;

  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiData: ApiData, public loadingController: LoadingController) {
    // Data takes sometime to load - adding loader
    let loader = this.loadingController.create({
      content: "content loading"
    });
    loader.present();

    // Get data
    this.films = this.apiData.getFilms();

    // dismiss loader
    setTimeout(function () {
      loader.dismiss();
    },2000);
  }

  openDetails(film) {
    this.navCtrl.push(DetailsListPage, {film: film});
  }
}
