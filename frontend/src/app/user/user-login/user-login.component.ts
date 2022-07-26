import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifiyService } from 'src/app/services/alertifiy.service';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private alertify:AlertifiyService,private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
onLogin(form:NgForm)
{
  console.log(form);
  if(form.valid)
  {
    const token=this.auth.authUser(form.value)
    if(token)
    {
    localStorage.setItem("token",token.userName);
    this.router.navigate(["/"]);
      this.alertify.success("Logged in Succesfully.")
    }
    else{
      this.alertify.error("Invalid Credentials");
    }
  }
  else{
    this.alertify.error("Please Enter Credentials");
  }

}
}
