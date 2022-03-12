import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { AppConstants } from '../_constants/app.constant';
import { HealthServices } from '../_models/health-services';
import { InsuranceCompany } from '../_models/insurance-company';
import { FlyerUtils } from '../_utils/flyer.utils';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService { private jsonConvert: JsonConvert;

  constructor(private _http: HttpClient) {
    this.jsonConvert = new JsonConvert();
   }

   public listInsuranceCompanies() : any {
    return this._http.get<any>(AppConstants._listInsuranceCompanies,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

  public addInsuranceCompany(name: string) : any{
    return this._http.put<any>(AppConstants._addInsuranceCompany + '?company=' + name, {} ,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

  public updateInsuranceCompany(id:string , company:string) : any{
    return this._http.post<any>(AppConstants._updateInsuranceCompany + '?id=' + btoa(id) + '&company=' + company,
    JSON.stringify(this.jsonConvert.serializeObject({})),
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }
}
