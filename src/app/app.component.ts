import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Benison-test';
  loginRoute: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    
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
