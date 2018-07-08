import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service'
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _login: SignupService, private router: ActivatedRoute,private data:DataSharingService
   , private route: Router) {
    
    }

  ngOnInit() {
    // header()
  }



  login(event) {
    this._login.LoginUser(this.loginUserData)
      .subscribe(
        res => {
          // console.log(res[0].Username);
          
          sessionStorage.setItem("key",res[0].Username);
          sessionStorage.setItem("key2",res[0].id)
          this.data.setLoggedInUser(true);
          this.route.navigate(['/listing']);
        },
        err => alert("Login Fail!!")
      )
  }

}
