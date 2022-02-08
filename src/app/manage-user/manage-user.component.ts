import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { UserService } from '../user.service';
import { User } from '../_models/user';
import { Snackbar } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  public searchUserForm: FormGroup;
  public userData: User[];
  jsonConvert: JsonConvert = new JsonConvert();

  get userName() {
    return this.searchUserForm.controls['userName'];
  }

  get mobileNumber() {
    return this.searchUserForm.controls['mobileNumber'];
  }

  constructor(private _formBuilder : FormBuilder, private _router: Router,
              private _userService: UserService,private _snackbar : Snackbar) {
    this.searchUserForm = _formBuilder.group({
      'userName' : ['all', [Validators.required]],
      'mobileNumber': ['', [Validators.minLength(10), Validators.maxLength(10)]],
      'email' : [''],
      'subscription' : ['']
    });
  }

  ngOnInit(): void {

  }

  formSubmit() {
    this.fetchSearchData();
  }

  public fetchSearchData(){
    const userName = this.searchUserForm.controls['userName'].value;
    const mobileNumber = this.searchUserForm.controls['mobileNumber'].value;
    const subscription = this.searchUserForm.controls['subscription'].value;
    const email = this.searchUserForm.controls['email'].value;
    this._userService.listUsers(userName,mobileNumber,subscription,email)
      .subscribe(
        data =>{
          let jsonConvert: JsonConvert = new JsonConvert();
          this._snackbar.alert("Successful!!");
          this.userData = jsonConvert.deserializeArray<User>(data['users'], User);
          console.log(this.userData[0].$userName)
        }
      )
  }

  onClear() {

  }

  editUser(){
    this._router.navigate(['editUser'])
  }

}
