import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.css']
})
export class HeaderTabComponent implements OnInit {
  apply: boolean = false
  constructor(private service: DataSharingService) {
  }

  public getUserLoggedIn(): boolean { return this.service.getUserLoggedIn() }

  ngOnInit() {
    if(sessionStorage.getItem("key")==null)
    {
      this.service.setLoggedInUser(false);
    }
    else{
      this.service.setLoggedInUser(true);
    }
     
  }

  logout() {
    this.service.setLoggedInUser(false);
    sessionStorage.clear()
  }

  onclick() {
    if (this.apply === false) {
      this.apply = true
    }
    else {
      this.apply = false
    }

  }
}