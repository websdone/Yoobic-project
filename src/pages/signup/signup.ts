import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { masterlistPage } from '../masterlist/masterlist';
import { MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class signupPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController,
              public menu:MenuController,
              public authProvider: AuthProvider) { }

  masterList() {
    this.navCtrl.push(masterlistPage);
  }

  signup() {
    this.authProvider.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authProvider.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authProvider.logout();
  }
}
