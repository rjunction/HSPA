import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifiyService } from '../services/alertifiy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser:string="Gusest";
  constructor(private router:Router,private alertify:AlertifiyService) { }

  ngOnInit() {
  }
  loggedin(){
  return localStorage.getItem("token");
}
onLogout(){
  localStorage.removeItem("token");
this.router.navigate(["/user/login"]);
this.alertify.success("Logged out Successfully!!");
}
}
