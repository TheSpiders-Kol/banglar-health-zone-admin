import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  public searchUserForm: FormGroup;
  public subscriptionStatus: string = 'Active';

  get name() {
    return this.searchUserForm.controls['name'];
  }

  get mobileNumber() {
    return this.searchUserForm.controls['mobileNumber'];
  }

  constructor(private _formBuilder : FormBuilder) {
    this.searchUserForm = _formBuilder.group({
      'name' : ['', [Validators.required]],
      'mobileNumber': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

  onClear() {

  }

  goToEditUser(){};

}
