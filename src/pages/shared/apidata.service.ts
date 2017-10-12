import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiData {

  constructor(public http: Http) { }

  getFilms() {
    return this.http.get('https://swapi.co/api/films').map(res => res.json());
  }
}


