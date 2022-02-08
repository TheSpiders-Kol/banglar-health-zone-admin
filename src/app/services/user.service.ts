import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { AppConstants } from '../_constants/app.constant';
import { FlyerUtils } from '../_utils/flyer.utils';

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
      return this._http.get<any>(AppConstants._getUserUrl + userName,
        { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
    } else {
      return this._http.get<any>(AppConstants._getUserUrl + userName,
        { headers: FlyerUtils.getHeaders(AppConstants._webTokenType) });
    }

  }

}
