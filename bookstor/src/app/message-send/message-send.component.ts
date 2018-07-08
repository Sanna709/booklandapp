import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupService } from '../signup.service'
import { ListingService } from '../listing.service'


@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.css']
})
export class MessageSendComponent implements OnInit {

  constructor(private _listing: ListingService,private _msg: MessageService, private router: ActivatedRoute,private _user: SignupService,
    private route: Router) { }

  Msg = { "SenderName": sessionStorage.getItem("key"), "SenderId": sessionStorage.getItem("key2") }
  selected_id
  splitted
  ngOnInit() {
    if (sessionStorage.getItem("key") != null) {
      this.router.paramMap.subscribe((params: ParamMap) => {
        this.selected_id = params.get('id');
        this.splitted = this.selected_id.split(",", 2); 
        this.Msg["SelectedBookId"]=this.splitted[1]
        this.Msg["ReceiverId"]=this.splitted[0]
        this.getname()
        this.getbookname()
      })
    }
    else {
      alert("You first need to login to view the listing!!")
      this.route.navigate(['/login']);
    }
  }

  getname()
  {
    this._user.GetUserNAme({ "id": this.Msg["ReceiverId"]})
    .subscribe(
      res => {
        this.Msg["ReceiverName"]=res[0].Username
      },
      err => alert("No user found!!"),
  )
  }

  getbookname()
  {
    this._listing.DetailListing({ "BookId": this.Msg["SelectedBookId"] })
  .subscribe(
    res => {
         this.Msg["BookName"]=res[0].BookName
    },
    err => alert("Data Not Found!!"),
)
  }

  Send() {
    // console.log(this.Msg);
    this._msg.SendMsg(this.Msg)
    .subscribe(
      res => {
        alert("Msg Sent");
      this.route.navigate(['/message']);

      },
      err => alert("Msg Not Sent!!"),
  )
  }

}
