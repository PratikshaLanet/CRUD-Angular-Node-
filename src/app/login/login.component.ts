import { Component, OnInit } from '@angular/core';
import {PersonService} from "../person.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  persons: any;
  angForm: FormGroup;


  constructor(private personservice: PersonService,
              private router: Router,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  login(userName, password) {
    this.personservice.getPersons().subscribe(res => {
        this.persons = res;
      }
    )
    this.persons.forEach(t => t.userName === userName)
    // if (this.persons.userName === userName && this.persons.password === password) {
    //   this.router.navigate(['./index']);
    // }
  }

}
