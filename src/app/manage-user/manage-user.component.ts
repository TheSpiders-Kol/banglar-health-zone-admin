import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { UserService } from '../services/user.service';
import { User } from '../_models/user';
import { Snackbar } from '../snackbar/snackbar.component';
import { ContactDetails } from '../_models/contact-details';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  public searchUserForm: FormGroup;
  public userData: User[];
  public userDetails: User;
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
    this.getSearchList();
  }

  formSubmit() {
    this.getSearchList();
  }

  public getSearchList(){
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
        }
      )
  }

  getUserDetails(usrNm : string){
    this.userDetails = new User();

  }

  onClear() {
  }

  goToEditUser(uName: string){
    this._router.navigate(['editUser'],{queryParams: {uName: uName}})
  }

  public extendSubscription(usrNm : string){
    this._userService.extendSubscription(usrNm)
      .subscribe(
        data =>{

        }
      )
  }

}
