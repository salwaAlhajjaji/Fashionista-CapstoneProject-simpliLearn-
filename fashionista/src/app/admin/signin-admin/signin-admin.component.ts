import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//show hide div variables
userlogin = true;
userregister = false;
//Buttons clicks functionalities 
user_register()
{
  this.userlogin = false;
  this.userregister = true;
}
user_login()
{
  this.userlogin = true;
  this.userregister = false;
}
}
