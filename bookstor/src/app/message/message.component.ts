import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _msg: MessageService,
    private route: Router) { }

    ReceiveMsgEr=false
    SentMsgEr=false

  ngOnInit() {
    if (sessionStorage.getItem("key") != null) {
      this.Receive()
      this.Sent()
    }
    else {
      alert("You first need to login to view the listing!!")
      this.route.navigate(['/login']);
    }
  }

  myid = sessionStorage.getItem("key2")
  ReceiveMsg = []
  SentMsg = []

  Receive() {
    this._msg.Receive({ "myid": this.myid })
      .subscribe(
        res => {
          this.ReceiveMsg = res
        },
        err => this.ReceiveMsgEr=true,
    )
  }

  contact(event) {
    if (event.target.id === sessionStorage.getItem("key2")) {
      alert("You are the Seller of the Book!!");
    }
    else {
      this.route.navigate(['/sendmsg/' + event.target.id + "," + event.currentTarget.name]);
    }
  }

  Sent() {
    this._msg.Sent({ "myid": this.myid })
      .subscribe(
        res => {
          this.SentMsg = res
        },
        err =>this.SentMsgEr=true ,
    )
  }
}
