import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Any } from 'json2typescript';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Snackbar } from '../snackbar/snackbar.component';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs';
import { TokenRefreshService } from '../services/token-refresh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  loader: boolean = false;
	isLoggedIn: boolean = false;
	userType : string = '';
	firstName: string = '';
	lastName: string = '';
  uName: any;
  pwd: any;

  private _isLoggedInSource = new Subject<boolean>();
  isLoggedIn$ = this._isLoggedInSource.asObservable();

  get userName() {
    return this.signInForm.controls['userName'];
  }

  get password() {
    return this.signInForm.controls['password'];
  }

  constructor(private _formBuilder : FormBuilder,
    private _authservice: AuthService,
    private _dataservice : DataService,
    private _snackbar : Snackbar,
    private _router: Router,
    private _tokenRefreshService : TokenRefreshService) {
    this.signInForm = _formBuilder.group({
      'userName' : ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public login() {
		this.loader=true;
		this._authservice.enroll({username: this.signInForm.controls['userName'].value, password: this.signInForm.controls['password'].value, grant_type: 'password'})
			.subscribe(
				data => {
					this.loader=false;
					this.isLoggedIn=true;
					localStorage.setItem('access_token', data.access_token);
					localStorage.setItem('refresh_token', data.refresh_token);
					this._snackbar.alert("Login Successful");
					this._dataservice.sendLoggedInInfo(this.isLoggedIn);
          this._tokenRefreshService.setTimer();
					this._router.navigateByUrl('/home');
				},
				error => {
					this.loader=false;
					this.isLoggedIn=false;
					if (error['status'] === 401
						|| error['status'] === 500
						|| error['status'] === 0) {
						this._snackbar.alert('Unable to login!!')
					} else {
						this._snackbar.alert(error.error.error_description);
					}
				}
			)
	}


}
