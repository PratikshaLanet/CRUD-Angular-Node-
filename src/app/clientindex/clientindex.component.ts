import { Component, OnInit } from '@angular/core';
import {PersonService} from "../person.service";

@Component({
  selector: 'app-clientindex',
  templateUrl: './clientindex.component.html',
  styleUrls: ['./clientindex.component.css']
})
export class ClientindexComponent implements OnInit {
  persons: any;
  p: number = 1;

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.service.getClientPersons().subscribe(res => {
      this.persons = res;
    });
  }

}
