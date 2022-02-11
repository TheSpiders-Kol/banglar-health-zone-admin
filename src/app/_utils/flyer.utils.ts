import { HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../_constants/app.constant';

export class FlyerUtils {

	static getFlightClassList() {

  }
  public static getHeaders(type: string) : HttpHeaders {
    if(type === AppConstants._accessTokenType) {
      return new HttpHeaders({
        'Authorization': 'Bearer'+ localStorage.getItem('access_token'),
        'Content-Type' : 'application/json'
      });
    }
    else {
      return new HttpHeaders({
        'Content-Type' : 'application/json'
      });
    }
  }
}
