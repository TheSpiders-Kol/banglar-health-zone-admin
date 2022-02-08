import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { AppConstants } from './_constants/app.constant';
import { FlyerUtils } from './_utils/flyer.utils';
import { Observable } from 'rxjs';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private jsonConvert: JsonConvert;

  constructor(private _http: HttpClient) {

    this.jsonConvert = new JsonConvert();
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
