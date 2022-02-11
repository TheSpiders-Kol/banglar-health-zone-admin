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

  public static _addUserUrl :string = AppConstants._base_url + '/api/user/register';
}
