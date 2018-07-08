import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private _alllistingUrl = "/Api/book/alllisting";
  private _detaillistingUrl = "/Api/book/detaillisting";
  private _uploadUrl = "/Api/book/upload";
  private _addUrl = "/Api/book/add";


  constructor(private http: HttpClient) { }

  AllListing(data) {
    // console.log(data)
    return this.http.post<any>(this._alllistingUrl,data)
  }

  DetailListing(id) {
    return this.http.post<any>(this._detaillistingUrl, id)
  }

  Upload(fd) {
    return this.http.post<any>(this._uploadUrl, fd)
  }

  Add(data) {
    // console.log(data)
    return this.http.post<any>(this._addUrl, data)

  }


}
