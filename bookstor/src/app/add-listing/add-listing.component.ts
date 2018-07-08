import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ListingService } from '../listing.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddListingComponent implements OnInit {

  constructor(private _add: ListingService,
  private route: Router) { }
  name = sessionStorage.getItem("key")
  selectedFile: File = null;
  fd = new FormData();
  Load:boolean=false
  closeResult: string;

  ngOnInit() {
    if (sessionStorage.getItem("key") != null) {
    }
    else {
      alert("You first need to login to view the listing!!")
      this.route.navigate(['/login']);
    }
  }

  path: string
  upload(content) {
    // this.modalService.open(content, { centered: true });
    this.Load=true
    this.fd.append("Image", this.selectedFile)
    this._add.Upload(this.fd)
      .subscribe(
        res => {
          // console.log(res["secure_url"])
          this.path = res["secure_url"]
          this.add()
        },
    )
  }
  addData = { "Seller": sessionStorage.getItem("key"), "userTableId": sessionStorage.getItem("key2") }
  add() {
    this.addData["Photo"] = this.path
    // console.log(this.addData)
    this._add.Add(this.addData)
      .subscribe(
        res => {
          this.Load=false
          alert("New Listing Added Successfully!!")
          this.route.navigate(['listing']);
        },
        err => {
          this.Load=false
          alert("You have already added the same listing Before!!")
          this.route.navigate(['listing']);
        }
      )
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
