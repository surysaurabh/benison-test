import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { Feedback } from '../share/feedback.model';
import { EmployeeService } from 'src/app/share/EmployeeService';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, of} from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';

// import { Router, ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/share/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent implements OnInit {  
  previousRoute: string = '';
  addForm: FormGroup;
  rating: number = 0;
  selecteEmployee: any;
  updateUser: boolean = false;
  IsEmpIdDisable: boolean = false;
  @Output()
  createUsercontact = new EventEmitter<Feedback>();

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService, private _location: Location) { 
    
  }

  ngOnInit() {

  this.selecteEmployee = this.empService.selectedEmployee;

  this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      project: ['', Validators.required],
      rating: [this.rating, Validators.required],
      comments: ['', Validators.required],
      managerRating: [''],
      managerComments: ['']
    });

  if (this.selecteEmployee) {
    this.updateUser = true;
    this.IsEmpIdDisable = true;
    this.rating = this.selecteEmployee.rating;
    this.addForm.setValue(this.selecteEmployee);
  } else {

  }
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }
  

  ratingComponentClick(clickObj: any): void {
    this.rating = clickObj.rating;
    this.addForm.patchValue({
      rating: this.rating
    });
  }

  onCancel() {
    this._location.back();
  }

  onSubmit() {
    if (this.updateUser) {
      this.empService.update(this.addForm.value);
      this.addForm.reset;
    } else {
      this.empService.create(this.addForm.value);
      this.addForm.reset;
    }
    this._location.back();
  }

}
