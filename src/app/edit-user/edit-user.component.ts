import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public editUserForm: FormGroup;
  public formSubmitted: boolean = false;

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

  constructor(private _formBuilder : FormBuilder) {
    this.editUserForm = _formBuilder.group({
      'firstName' : ['', [Validators.required]],
      'middleName' : [''],
      'lastName' : ['', [Validators.required]],
      'userName' : ['', [Validators.required]],
      'dob' : ['', [Validators.required]],
      'sex' : ['', [Validators.required]],
      'contactDetails' : _formBuilder.group({
        'address1' : ['', [Validators.required]],
        'address2' : ['', [Validators.required]],
        'city' : ['', [Validators.required]],
        'district' : ['', [Validators.required]],
        'pin' : ['', [Validators.required]],
        'email' : ['', [Validators.required]],
        'mobile' : ['', [Validators.required]],
      }),
      'subscripionExpiry': [''],
      'enabled': [false],      
      'trial': [false]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    this.formSubmitted = true;
  }

}
