import {  Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'details-list',
  templateUrl: 'details-list.html',
})
export class DetailsListPage {
  film: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
