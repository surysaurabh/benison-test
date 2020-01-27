import { Injectable } from '@angular/core';
import { Feedback } from './feedback.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  gameUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(public router:Router, public http: HttpClient) {

  }
  isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  selectedEmployee: any;

  getGames(): Observable<any> {
    return this.http.get(this.gameUrl);
  }

  subjectReturn() {
    return this.isLoggedIn;
  }
  
  login() {
    this.router.navigateByUrl('/employee/list');
    this.isLoggedIn.next(true);
    // routerLink="/employee/list"
  }

  managerLogin() {
    this.router.navigateByUrl('/manager');
    this.isLoggedIn.next(true);
  }

  setSession() {
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
  }

  logout(): void {

  }

  create(usercontact: Feedback) {
    this.employees = JSON.parse(sessionStorage.getItem('allEmployees'));
    this.employees.push(usercontact);
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
  }

  delete(usercontact: Feedback) {
    this.employees.splice(this.employees.indexOf(usercontact), 1);
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
  }

  update(usercontact: Feedback) {
    this.employees = JSON.parse(sessionStorage.getItem('allEmployees'));
    const itemIndex = this.employees.findIndex(item => item.id === usercontact.id);
    this.employees[itemIndex] = usercontact;
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
    this.selectedEmployee = null;
  }

  updateManagerRating(managerRating, empId): void {
    this.employees = JSON.parse(sessionStorage.getItem('allEmployees'));
    const itemIndex = this.employees.findIndex(item => item.id === empId);
    this.employees[itemIndex].managerRating = managerRating;
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
  }

  updateManagerComments(managerComments, empId): void {
    this.employees = JSON.parse(sessionStorage.getItem('allEmployees'));
    const itemIndex = this.employees.findIndex(item => item.id === empId);
    this.employees[itemIndex].managerComments = managerComments;
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
  }

  getall(): Feedback[] {
    this.employees = JSON.parse(sessionStorage.getItem('allEmployees'));
    return this.employees;
  }


  getUserById(id: number) {
    const itemIndex = this.employees.findIndex(item => item.id === id);
    return this.employees[itemIndex];
  }

  employees: Feedback[] = [{
    name: 'Gajanan L',
    id: 123,
    project: 'project1',
    rating: 3,
    comments: 'Ggod',
    managerRating: null,
    managerComments: null
  },
  {
    name: 'Suresh P',
    id: 234,
    project: 'project2',
    rating: 3,
    comments: 'Ggod',
    managerRating: null,
    managerComments: null
  }
  ];
}
