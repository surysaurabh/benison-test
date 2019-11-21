import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes, routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './employee/feedback/feedback.component';
import { ListComponent } from './employee/list/list.component';
import { EmployeeService } from 'src/app/share/EmployeeService';
import { RatingComponent } from './share/rating/rating.component';
import { DisableControlDirective } from './share/disable-control.directive';
import { RatingPipe } from './share/rating.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    ManagerComponent,
    FeedbackComponent,
    ListComponent,
    RatingComponent,
    DisableControlDirective,
    RatingPipe,
    // RouterModule no need for this module routing has already taken care of it.
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
