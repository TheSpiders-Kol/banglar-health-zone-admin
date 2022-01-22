import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  public searchUserForm: FormGroup;

  get name() {
    return this.searchUserForm.controls['name'];
  }

  get mobileNumber() {
    return this.searchUserForm.controls['mobileNumber'];
  }

  constructor(private _formBuilder : FormBuilder, private _router: Router) {
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

  editUser(){
    this._router.navigate(['editUser'])
  }

}
