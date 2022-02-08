import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { UserService } from '../user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  public searchUserForm: FormGroup;
  public userData: User[];
  jsonConvert: JsonConvert = new JsonConvert();

  get name() {
    return this.searchUserForm.controls['name'];
  }

  get mobileNumber() {
    return this.searchUserForm.controls['mobileNumber'];
  }

  constructor(private _formBuilder : FormBuilder, private _router: Router,
              private _userService: UserService) {
    this.searchUserForm = _formBuilder.group({
      'name' : ['all', [Validators.required]],
      'mobileNumber': ['', [Validators.minLength(10), Validators.maxLength(10)]],
      'email' : [''],
      'subscription' : ['']
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
