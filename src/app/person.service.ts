import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class PersonService {

  result: any;
  constructor(private http: HttpClient, private router: Router) {}

  addPerson(firstname, lastname, userName, password, isActive) {
    const uri = 'http://localhost:4000/persons/add';
    const obj = {
      firstname: firstname,
      lastname: lastname,
      isActive: isActive,
      userName: userName,
      password: password
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => {
        this.router.navigate(['./index']);
        console.log('Done');
      });
  }

  getPersons() {
    const uri = 'http://localhost:4000/persons';
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  getClientPersons() {
    const uri = 'http://localhost:4000/persons/client';
    return this
      .http
      .get(uri)
      .map(res => {
          return res;
      });
  }

  editPerson(id) {
    const uri = 'http://localhost:4000/persons/edit/' + id;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  updatePerson(firstname, lastname, isActive, id) {
    const uri = 'http://localhost:4000/persons/update/' + id;
    const obj = {
      firstname: firstname,
      lastname: lastname,
      isActive: isActive
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => {
        this.router.navigate(['./index'])
        console.log('Done');
      });
  }

  updatePersonClient(firstname, lastname, isActive, id) {
    const uri = 'http://localhost:4000/persons/update/' + id;
    const obj = {
      firstname: firstname,
      lastname: lastname,
      isActive: isActive
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => {
        this.router.navigate(['./clientindex'])
        console.log('Done');
      });
  }

  updatePersonAvail(isActive, id) {
    const uri = 'http://localhost:4000/persons/update/avail/' + id;
    const obj = {
      isActive: isActive
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => {
        this.router.navigate(['./index'])
        console.log('Done');
      });
  }

  deletePerson(id) {
    const uri = 'http://localhost:4000/persons/delete/' + id;

    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }
}
