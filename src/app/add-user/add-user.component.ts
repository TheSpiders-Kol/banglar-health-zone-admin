import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public addUserForm: FormGroup;
  public formSubmitted: boolean = false;

  get firstName() {
    return this.addUserForm.controls['firstName'];
  }

  get lastName() {
    return this.addUserForm.controls['lastName'];
  }

  get userName() {
    return this.addUserForm.controls['userName'];
  }

  get dob() {
    return this.addUserForm.controls['dob'];
  }

  get sex() {
    return this.addUserForm.controls['sex'];
  }

  get address1() {
    return this.addUserForm.get('contactDetails.address1');
  }

  get address2() {
    return this.addUserForm.get('contactDetails.address2');
  }

  get city() {
    return this.addUserForm.get('contactDetails.city');
  }

  get district() {
    return this.addUserForm.get('contactDetails.district');
  }

  get pin() {
    return this.addUserForm.get('contactDetails.pin');
  }

  get email() {
    return this.addUserForm.get('contactDetails.email');
  }

  get mobile() {
    return this.addUserForm.get('contactDetails.mobile');
  }

  constructor(private _formBuilder : FormBuilder) {
    this.addUserForm = _formBuilder.group({
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

  onClear() {
    this.formSubmitted = false;
    this.addUserForm.reset();
  }

}
