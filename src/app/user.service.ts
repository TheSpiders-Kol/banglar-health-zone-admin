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

  public listUsers(userName: string, expired :boolean, email: string, mobile: string,
    limit: number, offset: number, wid: string) :Observable<User[]> {

    let url : string = AppConstants._listUser;
    if (userName || expired || email || mobile || limit || offset || wid) {
      url = url + "?";
      if (userName) {
        url = url + "user-name=" + userName + "&";
      }
      if (expired) {
        url = url + "expired=" + expired + "&";
      }
      if (email) {
        url = url + "email=" + email + "&";
      }
      if (mobile) {
        url = url + "mobile=" + mobile + "&";
      }
      if (limit) {
        url = url + "limit=" + limit + "&";
      }
      if (offset) {
        url = url + "offset=" + offset + "&";
      }
      if (wid) {
        url = url + "wid=" + wid + "&";
      }
      url = url.substr(0, url.length - 1)
    }
    return this._http.get<any>(url,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });

  }
}
