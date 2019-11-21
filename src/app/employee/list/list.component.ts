import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { EmployeeService } from './../share/EmployeeService';
import { Router, ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/share/feedback.model';
import { EmployeeService } from 'src/app/share/EmployeeService';
// import {Observable, from } from 'rxjs';
import { of, Observable } from 'rxjs';
// import { of } from 'rxjs/observable/of';
// import { of } from 'rxjs';
import { RatingPipe } from '../../share/rating.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allEmployees: Feedback[]; // Array<string>
  usercont: Feedback;
  // rating: number;
  managerRoute: boolean = false;

  constructor(private ucs: EmployeeService, private router: Router,
    private route: ActivatedRoute) {
      this.route.url.subscribe(url => {
        if (url[0].path === 'manager') {
          this.managerRoute = true;
        }
      }
    );
  }

  ngOnInit() {
    if (!JSON.parse(sessionStorage.getItem('allEmployees'))) {
      this.ucs.setSession();
    }
    this.allEmployees = this.ucs.getall();
    
  } 

  ratingManagerComments(evt, index) {
    if (evt && evt.target.value && index)
    this.ucs.updateManagerComments(evt.target.value, index);
    this.allEmployees = this.ucs.getall();
  }

  ratingManagerRating(clickObj: any, index): void {
    // this.rating = clickObj.rating;
    this.ucs.updateManagerRating(clickObj.rating, index);
    this.allEmployees = this.ucs.getall();


  }

  editEmployee(usercontact: Feedback, index) {
    this.ucs.selectedEmployee = usercontact;
    // localStorage.removeItem('editUserId');
    // localStorage.setItem('editUserId', usercontact.id.toString());
    this.router.navigate(['/employee/feedback']);
    // this.ucs.update(usercontact);
  }

  deleteEmployee(empl: Feedback) {
    let txt;
    const r = confirm("Are you sure?");
    if (r == true) {
      this.ucs.delete(empl);
      this.allEmployees = this.ucs.getall();
    } else {
      txt = "You pressed Cancel!";
    }    
  }

  

}
