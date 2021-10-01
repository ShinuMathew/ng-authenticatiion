import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public model!: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
    
  }

  maxDate = {year: new Date().getUTCFullYear()-16,month: 12, day: 31}
  minDate = {year: new Date().getUTCFullYear()-90,month: 12, day: 31}
  startDate = {year: new Date().getUTCFullYear()-20,month: new Date().getUTCMonth(), day: 1}

}
