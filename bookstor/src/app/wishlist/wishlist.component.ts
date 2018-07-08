import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service'
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private _wishlist: WishlistService, private _listing: ListingService,
    private route: Router) { }

  listdata = []
  list=[]

  ngOnInit() {
    if (sessionStorage.getItem("key") != null) {
      this.Wishlist()
    }
    else {
      alert("You first need to login to view the listing!!")
      this.route.navigate(['/login']);
    }
  }
  Wishlist() {
    this._wishlist.Wishlist({ "id": sessionStorage.getItem("key2") })
      .subscribe(
        res => {
          this.listdata = res
          this.ViewWishlist(this.listdata)
        },
        err => this.NoWishlist=true,
    )
  }

  onclick(event) {
    this.route.navigate(['/detaillisting/' + event.currentTarget.id]);
  }

  i:number=0
  NoWishlist=false
 
  ViewWishlist(ldata) {
    for (let entry of ldata) {
      this._listing.DetailListing({ "BookId": entry["bookTableBookId"] })
        .subscribe(
          res => {
            this.list[this.i++] = res[0]
          },
          err => alert("Data Not Found!!"),
      )
    
    }
  }

}
