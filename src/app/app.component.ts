import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './share/EmployeeService';
import { Observable } from 'rxjs';
// import { map } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit  {
  title = 'Benison-test';
  loginRoute: boolean = false;
  isLoggedIn$: Observable<Boolean>;
  employees: any = {};
  asyncEmployee:Observable<any>;
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient,
    private CD: ChangeDetectorRef,
    private empService: EmployeeService) {
      this.isLoggedIn$ = this.empService.isLoggedIn;
      this.asyncEmployee = this.empService.getGames();    
  }

  ngOnInit() {
    this.empService.getGames().subscribe(val => this.employees = val);

    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe(res => console.log(res));
    //this.CD.detectChanges();

  }
  
  logout() {
    this.empService.logout();
  }
  onActivate(e) {
    if (e.constructor.name && e.constructor.name === 'LoginComponent') {
      this.loginRoute = true;
    } else {
      this.loginRoute = false;
    }
    console.log(e.constructor.name);
    //etc... you can access to a lot of other information
  }
}
