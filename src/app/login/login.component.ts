import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../share/EmployeeService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  }

  login() {
    this.empService.login();
  }

  managerLogin() {
    this.empService.managerLogin();
  }
}
