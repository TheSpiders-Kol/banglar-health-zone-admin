import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { AppConstants } from '../_constants/app.constant';
import { HealthServices } from '../_models/health-services';
import { FlyerUtils } from '../_utils/flyer.utils';

@Injectable({
  providedIn: 'root'
})
export class HealthServiceService {
  private jsonConvert: JsonConvert;

  constructor(private _http: HttpClient) {
    this.jsonConvert = new JsonConvert();
   }

   public listHealthServices() : any {
    return this._http.get<any>(AppConstants._listHealthServices,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

  public addHealthServices(name: string) : any{
    return this._http.put<any>(AppConstants._addHealthServices + '?name=' + name, {} ,
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }

  public updateName(id:string , name:string) : any{
    return this._http.post<any>(AppConstants._updateHealthServices + '?id=' + btoa(id) + '&name=' + name,
    JSON.stringify(this.jsonConvert.serializeObject({})),
      { headers: FlyerUtils.getHeaders(AppConstants._accessTokenType) });
  }
}
