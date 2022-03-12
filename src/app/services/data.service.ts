import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HealthServices } from '../_models/health-services';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _isLoggedInSource = new Subject<boolean>();
  isLoggedIn$ = this._isLoggedInSource.asObservable();

  private _healthServiceNameEditSource = new Subject<HealthServices>();
  healthServiceEdit$ = this._healthServiceNameEditSource.asObservable();


  constructor() { }

  sendLoggedInInfo(logInfo: boolean) {
    this._isLoggedInSource.next(logInfo);
  }

  sendHealthServiceNameInfo(details: HealthServices) {
    this._healthServiceNameEditSource.next(details);
  }

}
