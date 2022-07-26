import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifiyService } from '../services/alertifiy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router,private alertify:AlertifiyService) { }

  ngOnInit() {
  }
loggedIn(){
  return localStorage.getItem("token");
}
logOut(){
  localStorage.removeItem("token");
this.router.navigate(["/user/login"]);
this.alertify.success("Logged out Successfully!!");
}
}
