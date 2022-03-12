import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JsonConvert } from 'json2typescript';
import { UserService } from '../services/user.service';
import { ContactDetails } from '../_models/contact-details';
import { User } from '../_models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public editUserForm: FormGroup;
  public formSubmitted: boolean = false;
  public initUser: User = new User();
  public isEditMode :  boolean = false;

  get firstName() {
    return this.editUserForm.controls['firstName'];
  }

  get lastName() {
    return this.editUserForm.controls['lastName'];
  }

  get userName() {
    return this.editUserForm.controls['userName'];
  }

  get dob() {
    return this.editUserForm.controls['dob'];
  }

  get sex() {
    return this.editUserForm.controls['sex'];
  }

  get address1() {
    return this.editUserForm.get('contactDetails.address1');
  }

  get address2() {
    return this.editUserForm.get('contactDetails.address2');
  }

  get city() {
    return this.editUserForm.get('contactDetails.city');
  }

  get district() {
    return this.editUserForm.get('contactDetails.district');
  }

  get pin() {
    return this.editUserForm.get('contactDetails.pin');
  }

  get email() {
    return this.editUserForm.get('contactDetails.email');
  }

  get mobile() {
    return this.editUserForm.get('contactDetails.mobile');
  }

  get subscripionExpiry() {
    return this.editUserForm.get('subscripionExpiry');
  }

  constructor(private _formBuilder : FormBuilder,
    private _route: ActivatedRoute,
    private _userService: UserService) {
    this.editUserForm = _formBuilder.group({
      'firstName' :  ['', [Validators.required]],
      'middleName' : [''],
      'lastName' :   ['', [Validators.required]],
      'userName' :   ['', [Validators.required]],
      'dob' :        ['', [Validators.required]],
      'sex' :        ['', [Validators.required]],
      'address1' :   ['', [Validators.required]],
      'address2' :   ['', [Validators.required]],
      'city' :       ['', [Validators.required]],
      'district' :   ['', [Validators.required]],
      'pin' :        ['', [Validators.required]],
      'email' :      ['', [Validators.required]],
      'mobile' :     ['', [Validators.required]],
      'subscripionExpiry': ['']
    });
  }

  ngOnInit(): void {
    let usrNm :string = this._route.snapshot.queryParamMap.get('uName') || '';
    this._userService.getUser(usrNm).
      subscribe(
        data => {
          let jsonConvert: JsonConvert = new JsonConvert();
          this.initUser = jsonConvert.deserializeObject<User>(data['user'], User);
          this.loadUserDetails(this.initUser);
        }
      )
    window.scrollTo({top:0, behavior: 'smooth'});
  }

  formSubmit() {
    this.formSubmitted = true;
    let usr = this.loadUserForSave();
    this._userService.updateUser(usr)
          .subscribe(
            data =>{ this.loadUserDetails(data['message']);
                    }
            )
  }

  public toEditMode() {
    this.isEditMode = true;
  }

  loadUserDetails(usr : User){
    this.editUserForm.controls['firstName'].setValue(usr.$firstName);
    this.editUserForm.controls['middleName'].setValue(usr.$middleName);
    this.editUserForm.controls['lastName'].setValue(usr.$lastName);
    this.editUserForm.controls['userName'].setValue(usr.$userName);
    this.editUserForm.controls['dob'].setValue(usr.$dob);
    this.editUserForm.controls['sex'].setValue(usr.$sex);
    let contact : ContactDetails = this.initUser.$contactDetails;
    this.editUserForm.controls['address1'].setValue(contact.$address1);
    this.editUserForm.controls['address2'].setValue(contact.$address2);
    this.editUserForm.controls['city'].setValue(contact.$city);
    this.editUserForm.controls['district'].setValue(contact.$district);
    this.editUserForm.controls['pin'].setValue(contact.$pin);
    this.editUserForm.controls['email'].setValue(contact.$email);
    this.editUserForm.controls['mobile'].setValue(contact.$mobile);
    this.editUserForm.controls['subscripionExpiry'].setValue(usr.$subscripionExpiry)
  }

  loadUserForSave(){
    let usr : User = new User;
    usr.$firstName = this.editUserForm.controls['firstName'].value;
    usr.$middleName = this.editUserForm.controls['middleName'].value;
    usr.$lastName =this.editUserForm.controls['lastName'].value;
    usr.$sex = this.editUserForm.controls['sex'].value;
    usr.$dob = this.editUserForm.controls['dob'].value;
    usr.$userId = this.initUser.$userId;
    usr.$userName = this.editUserForm.controls['userName'].value;
    usr.$contactDetails = new ContactDetails;
    usr.$contactDetails.$address1 = this.editUserForm.controls['address1'].value;
    usr.$contactDetails.$address2 = this.editUserForm.controls['address2'].value;
    usr.$contactDetails.$city = this.editUserForm.controls['city'].value;
    usr.$contactDetails.$country = this.initUser.$contactDetails.$country;
    usr.$contactDetails.$district = this.editUserForm.controls['district'].value;
    usr.$contactDetails.$email = this.editUserForm.controls['email'].value;
    usr.$contactDetails.$mobile = this.editUserForm.controls['mobile'].value;
    usr.$contactDetails.$pin = this.editUserForm.controls['pin'].value;
    return usr;
  }

}
