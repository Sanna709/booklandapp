import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUserData = {}

  constructor(private _signup: SignupService, private router:ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
  }

  signup() {
    this._signup.SignupUser(this.signupUserData)
      .subscribe(
        res => this.route.navigate(['/login']),
        err =>alert("UserName Already Exist!!"),
      )
  }

}
