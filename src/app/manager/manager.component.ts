import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from './../share/EmployeeService';
// import { ListComponent } from '../employee/list/list.component'
import { Router } from '@angular/router';
import { Feedback } from 'src/app/share/feedback.model';
import { EmployeeService } from 'src/app/share/EmployeeService';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

    constructor() {

    }
    ngOnInit() {
    
  }


}
