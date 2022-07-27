import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  name:string="rahul";
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  propertyType:Array<any>=["Apartment","House","Duplex"]
  furnishType:Array<any>=["Fuly","Semi","UnFurnished"]
  gateEntrance:Array<any>=["North","West","South","East"]
  // @ViewChild("form")
  // addPropertyForm!: NgForm;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack(){
      this.router.navigate(['/'])
  }
  onSubmit(form:NgForm){
    console.log(form);
  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
  // onSubmit(){
  //   console.log(this.addPropertyForm);
  // }
}
