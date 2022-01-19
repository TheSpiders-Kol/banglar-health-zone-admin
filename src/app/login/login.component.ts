import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;

  get mobileNumber() {
    return this.signInForm.controls['mobileNumber'];
  }

  get otp() {
    return this.signInForm.controls['otp'];
  }

  constructor(private _formBuilder : FormBuilder) {
    this.signInForm = _formBuilder.group({
      'mobileNumber' : ['', [Validators.required , Validators.minLength(10), Validators.maxLength(10)]],
      'otp': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  formSubmit() {
    
  }

}
