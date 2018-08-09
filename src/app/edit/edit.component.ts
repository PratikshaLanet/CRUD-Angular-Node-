import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../person.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  person: any;
  angForm: FormGroup;
  title = 'Edit Person';
  constructor(private route: ActivatedRoute, private router: Router, private service: PersonService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ]
    });
  }

  updatePerson(firstname, lastname, isActive) {
    this.route.params.subscribe(params => {
      this.service.updatePerson(firstname, lastname, isActive, params['id']);
    });
    this.service.getPersons();
    // this.router.navigate(['index']);
  }

  updatePersonClient(firstname, lastname, isActive) {
    this.route.params.subscribe(params => {
      this.service.updatePersonClient(firstname, lastname, isActive, params['id']);
    });
    this.service.getPersons();
    // this.router.navigate(['index']);
  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.person = this.service.editPerson(params['id']).subscribe(res => {
        this.person = res;
      });
    });
  }
}
