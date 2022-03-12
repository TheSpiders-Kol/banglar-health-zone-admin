import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { Observable } from 'rxjs';
import { AppConstants } from '../_constants/app.constant';
import { Hospital } from '../_models/hospital';
import { FlyerUtils } from '../_utils/flyer.utils';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private jsonConvert: JsonConvert;

  constructor(private _http: HttpClient) {
    this.jsonConvert = new JsonConvert();
  }

  public listHospitals(district: string,corona: boolean) :Observable<[]> {
    let url : string = AppConstants._listHospitals;
    if (district || corona) {
      url = url + "?";
      if (district) {
        url = url + "district=" + district + "&";
      }
      if (corona) {
        url = url + "corona=" + corona + "&";
      }
      url = url.substr(0, url.length - 1)
    }
    return this._http.get<any>(url,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

  public addHospital(hsptl: Hospital) : any{
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
    return this._http.put<any>(AppConstants._addHospital,
      JSON.stringify(this.jsonConvert.serializeObject(hsptl)),
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

}
