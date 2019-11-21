import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackComponent } from './employee/feedback/feedback.component';
import { ListComponent } from './employee/list/list.component';

export const routes: Routes = [
	{
	    path: '',
	    component: LoginComponent,
	},
	{
	    path: 'employee',
		component: EmployeeComponent,
		children: [
			{ path: 'feedback', component: FeedbackComponent },
			// { path: 'edit-feedback/:id', component: FeedbackComponent },
    		{ path: 'list', component: ListComponent }
		]
	},
	{
	    path: 'manager',
		component: ManagerComponent
	}
];

export const routing = RouterModule.forRoot(routes);