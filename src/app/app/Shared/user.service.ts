import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User;
  readonly routeUrl =  `${environment.API_URL}api` ;
  constructor(private _http: HttpClient) { }

//--------------------Register----------------------------------------------------
  postUser(formData: User)
  {
    return this._http.post(this.routeUrl + '/Account/Register', formData);
  }
  //------------------------------Authentication login----------------------------
  userAuthentication(Name, Password)
  { const routeUrl =  `${environment.API_URL}token` ;
      var data="Username="+Name+"&Password="+Password+"&grant_type=password";
      var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(routeUrl,data,{headers:reqHeader});
  }
}