import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _wishlistUrl = "/Api/wishlist/get";
  private _addwishlistUrl = "/Api/wishlist/post";


  constructor(private http: HttpClient) { }
  Wishlist(data) {
    return this.http.post<any>(this._wishlistUrl, data);
  }
  AddWishlist(data) {
    return this.http.post<any>(this._addwishlistUrl, data);
  }
}
