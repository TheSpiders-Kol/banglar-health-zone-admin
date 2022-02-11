import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { AppConstants } from '../_constants/app.constant';
import { User } from '../_models/user';
import { FlyerUtils } from '../_utils/flyer.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private jsonConvert: JsonConvert;

  constructor(private _http: HttpClient) {
    this.jsonConvert = new JsonConvert();
  }

  public getUser(userName: string) : any {
    if (localStorage.getItem('access_token')) {
      return this._http.get<any>(AppConstants._getUserUrl + '?userId=' + userName,
        { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
    } else {
      return this._http.get<any>(AppConstants._getUserUrl + '?userId=' + userName,
        { headers: FlyerUtils.getHeaders(AppConstants._webTokenType) });
    }
  }

  public addUser(user: User) : any{
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
    return this._http.post<any>(AppConstants._addUserUrl,
      JSON.stringify(this.jsonConvert.serializeObject(user)),
      { headers: FlyerUtils.getHeaders("") });
  }

  public listUsers(userName: string,email: string, mobileNumber: string,
    subscription: string) :Observable<User[]> {
    let url : string = AppConstants._listUser;
    if (userName || subscription || email || mobileNumber) {
      url = url + "?";
      if (userName) {
        url = url + "username=" + userName + "&";
      }
      if (subscription) {
        url = url + "expired=" + subscription + "&";
      }
      if (email) {
        url = url + "email=" + email + "&";
      }
      if (mobileNumber) {
        url = url + "mobile=" + mobileNumber + "&";
      }
      url = url.substr(0, url.length - 1)
    }
    return this._http.get<any>(url,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

}
