import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-detail-listing',
  templateUrl: './detail-listing.component.html',
  styleUrls: ['./detail-listing.component.css']
})
export class DetailListingComponent implements OnInit {

  constructor(private _listing: ListingService, private router: ActivatedRoute, private _wishlist: WishlistService
    , private route: Router) { }
  selected: number;
  data = []
  ngOnInit() {
    if (sessionStorage.getItem("key") != null) {
      this.router.paramMap.subscribe((params: ParamMap) => {
        this.selected = +(params.get('id'));
        // console.log(this.selected);
      })
      this.detaillisting()
    }
    else {
      alert("You first need to login to view the listing!!")
      this.route.navigate(['/login']);
    }
  }

  buyclick() {
    alert("Your Order has been Placed!!");
  }

  contactclick(event) {
    if (event.target.id === sessionStorage.getItem("key2")) {
      alert("You are the Seller of the Book!!");
    }
    else {
      this.route.navigate(['/sendmsg/' + event.target.id + "," + event.currentTarget.name]);
    }
  }

  wishlistclick() {
    alert("Added to Wishlist!!")
  }

  detaillisting() {
    this._listing.DetailListing({ "BookId": this.selected })
      .subscribe(
        res => {
          this.data = res[0]
        },
        err => alert("Data Not Found!!"),
    )
  }

  wishlistData = { "myid": sessionStorage.getItem("key2") }

  addtowishlist(event) {
    this.wishlistData["bookid"] = this.selected
    // console.log(this.wishlistData);
    this._wishlist.AddWishlist(this.wishlistData)
      .subscribe(
        res => {
          alert("Added to Wishlist")
        },
        err => alert("Already Present in the WishList")

      )
  }

}
