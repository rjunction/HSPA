import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/IProperty';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

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
  propertyView:IPropertyBase={
    Id:0,
    Image:'',
    Name:'',
    Price:0,
    SellRent:0,
    PType:'',
    FType:'',
    BHK:0,
    BuiltArea:0,
    City:'',
    RTM:0
  };
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
