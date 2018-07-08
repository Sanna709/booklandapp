import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service'
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
// import { WSAEDQUOT } from 'constants';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {
  listdata
  iddata
  Book={"name":""}
  Author={"name":""}
  MaxPrice = { "range": "1000" }
  Condition = { condition0: true, condition1: false, condition2: false, condition3: false, condition4: false }
  constructor(private _listing: ListingService, private _wishlist: WishlistService,
    private route: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("key") != null) {
      this.Change()
      this.alllisting()
    }
    else {
      alert("You first need to login to view the listing!!")
      this.route.navigate(['/login']);
    }
  }

  onclick(event) {
    this.iddata = event.currentTarget.id;
    this.route.navigate(['/detaillisting/' + this.iddata]);
  }

  PriceChange() {
    this.alllisting()
  }

  arr = []

  Change() {
    if (this.Condition["condition0"] == true) {
      this.arr.push("New", "Almost New", "Slight Damage", "Worn")
    }
    else {
      this.arr = []
      if (this.Condition["condition1"] == true) {
        this.arr.push("New")
      }
      if (this.Condition["condition2"] == true) {
        this.arr.push("Almost New")
      }
      if (this.Condition["condition3"] == true) {
        this.arr.push("Slight Damage")
      }
      if (this.Condition["condition4"] == true) {
        this.arr.push("Worn")
      }
    }
    this.alllisting()
  }

  BookChange()
  {
    this.alllisting()
  }
  AuthorChange()
  {
    this.alllisting()
  }

  alllisting() {
    this._listing.AllListing({ max: this.MaxPrice["range"], con: this.arr,book:this.Book["name"],author:this.Author["name"] })
      .subscribe(
        res => {
          this.listdata = res
          // console.log(this.listdata)
        },
        err => alert("Data Not Found!!"),
    )
  }

  wishlistData = { "myid": sessionStorage.getItem("key2") }

  addtowishlist(event) {
    this.wishlistData["bookid"] = event.currentTarget.name
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
