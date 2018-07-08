import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _msgsentUrl = "/Api/msg/sent";
  private _msgreceiveUrl = "/Api/msg/receive";
  private _msgsendUrl = "/Api/msg/sendmsg";


  constructor(private http: HttpClient) { }

  Sent(data) {
    return this.http.post<any>(this._msgsentUrl,data);
  }

  Receive(data) {
    return this.http.post<any>(this._msgreceiveUrl,data);
  }

  SendMsg(data) {
    return this.http.post<any>(this._msgsendUrl,data);
  }

}
