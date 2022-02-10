import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Auth } from '../_models/auth';
import { AppConstants } from '../_constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedInSource = new Subject<boolean>();
  isLoggedIn$ = this._isLoggedInSource.asObservable();

  constructor(private _http: HttpClient) { }

  private getHeader() : HttpHeaders{
    return new HttpHeaders({
      'Authorization': 'Basic ' + btoa(AppConstants.client + ':' + AppConstants.secret)
    });
  }

  public enroll(auth: Auth) {
  	let input = new FormData();
  	input.append('grant_type', 'password');
  	input.append('password', auth.password);
    input.append('username', auth.username);

  	return this._http.post<any>(AppConstants._authUrl, input, {
  		headers: this.getHeader()
  	});
  }

  public refresh(refToken: string) : any{
    let data = new FormData();
  	data.append('grant_type', 'refresh_token');
    data.append('refresh_token', refToken);

    return this._http.post<any>(AppConstants._authUrl, data, {
  		headers: this.getHeader()
  	});
  }

  public isValidLogin() : boolean {
		if (localStorage.getItem('access_token') &&
				localStorage.getItem('userName') &&
				localStorage.getItem('userId') &&
        localStorage.getItem('userName')) {
			 return true;
		} else {
			this.logout();
			return false;
		}
  }

  public getCurrentUserRole() {
    return localStorage.getItem('role');
  }

  public logout() : void{
	localStorage.clear();
  }

  sendLoggedInInfo(logInfo: boolean) {
    this._isLoggedInSource.next(logInfo);
  }
}