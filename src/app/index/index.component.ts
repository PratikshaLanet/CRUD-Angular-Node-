import { PersonService } from './../person.service';
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isActive: Boolean;
  persons: any;
  p: number = 1;

  constructor(private http: HttpClient, private service: PersonService, private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.service.getPersons().subscribe(res => {
      this.persons = res;
    });
  }

  updatePerson(isActive, id) {
    this.route.params.subscribe(params => {
      this.service.updatePersonAvail(isActive, id);
    });
    this.service.getPersons();
    // this.router.navigate(['index']);
  }

  deletePerson(id) {
    this.service.deletePerson(id).subscribe(res => {
      console.log('Deleted');
    });
    this.getPersons();
    this.router.navigate(['/index']);
  }
}
