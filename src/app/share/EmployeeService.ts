import { Injectable } from '@angular/core';
import { Feedback } from './feedback.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  selectedEmployee: any;
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

  setSession() {
    sessionStorage.setItem('allEmployees', JSON.stringify(this.employees));
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
}
