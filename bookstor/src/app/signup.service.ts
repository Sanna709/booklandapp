import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private _signupUrl = "/Api/users/signup"
  private _loginUrl = "/Api/users/login"
  private _getnameUrl = "/Api/users/getname"

  constructor(private http: HttpClient) { }
  SignupUser(signupUserData) {
    return this.http.post<any>(this._signupUrl, signupUserData)
  }

  LoginUser(loginUserData) {
    return this.http.post<any>(this._loginUrl, loginUserData)
  }

  GetUserNAme(data) {
    return this.http.post<any>(this._getnameUrl, data)
  }
}
