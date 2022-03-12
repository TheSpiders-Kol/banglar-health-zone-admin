import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Snackbar } from '../snackbar/snackbar.component';
import { AppConstants } from '../_constants/app.constant';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService {
  public test: string = 'default';
  private static interval: any = undefined;

  constructor(private _dataService: DataService,
    private _authservice: AuthService,
    private _snackbar : Snackbar,
    private _router : Router) {
     }

     public refreshToken(){
      let refToken: string = localStorage.getItem('refresh_token');
      if (refToken) {
        this._authservice.refresh(refToken)
          .subscribe(
            data => {
              localStorage.setItem('access_token', data.access_token);
              localStorage.setItem('refresh_token', data.refresh_token);
              localStorage.setItem('expiry_time', this.getExpiryTime().toString());
            },
            error => {
              this._authservice.logout();
            }
          )
      }
    }

    private getExpiryTime() : number{
      return (new Date().getTime() + AppConstants._reloadInterval);
    }

    public setTimer(){
      console.log("inside interval method")
      if (this._authservice.isValidLogin()) {
        this.refreshToken();
        if (!TokenRefreshService.interval) {
          TokenRefreshService.interval = setInterval(() => {
            this.refreshToken();
          }, AppConstants._reloadInterval);
        }
      } else {
        this._authservice.logout();
      }
    }
}


