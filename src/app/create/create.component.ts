import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title: 'Add Person';
  angForm: FormGroup;
  persons: any;

  constructor(private personservice: PersonService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // getPersons() {
  //   this.personservice.getPersons().subscribe(res => {
  //     this.persons = res;
  //     if (res) {
  //       this.router.navigate(['./index']);
  //     }
  //   });
  // }

  addPerson(firstname, lastname, userName, password, isActive) {
    this.personservice.addPerson(firstname, lastname, userName, password, true);
     this.personservice.getPersons();
  }

  ngOnInit() {
  }
}
