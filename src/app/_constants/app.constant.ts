import { windowWhen } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AppConstants {
  private static _base_url : string = 'http://162.214.113.163:8080';
  public static _authUrl : string = AppConstants._base_url + '/oauth/token';
  public static _listUser : string = AppConstants._base_url + '/api/user/list';
  public static _accessTokenType: string = 'access';
  public static client: string = environment.apiClient;
  public static secret: string = environment.apiSecret;
  public static _getUserUrl = AppConstants._base_url + '/api/user/get';
  public static _webTokenType: string = 'webtoken';
  public static _reloadInterval: number = 2*60*1000;
  public static _addUserUrl :string = AppConstants._base_url + '/api/user/register';
  public static _listHealthServices :string = AppConstants._base_url + '/api/health/services/list';
  public static _extendSubscription :string = AppConstants._base_url + '/api/user/subscribe';
  public static _updateUser :string = AppConstants._base_url + '/api/user/update';
  public static _addHealthServices :string = AppConstants._base_url + '/api/health/services/add';
  public static _updateHealthServices :string = AppConstants._base_url + '/api/health/services/update';
  public static _listInsuranceCompanies :string = AppConstants._base_url + '/api/insurance/list';
  public static _addInsuranceCompany :string = AppConstants._base_url + '/api/insurance/add';
  public static _updateInsuranceCompany :string = AppConstants._base_url + '/api/insurance/update';
  public static _listHospitals :string = AppConstants._base_url + '/api/hospital/list';
  public static _addHospital :string = AppConstants._base_url + '/api/hospital/add';
}
