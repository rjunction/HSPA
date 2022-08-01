import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/IProperty';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { Property } from 'src/app/model/Property';
import { AlertifiyService } from 'src/app/services/alertifiy.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  name:string="rahul";
  // @ViewChild('form') form!:NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  addPropertyForm!:FormGroup;
  propertyType:Array<any>=["Apartment","House","Duplex"]
  furnishType:Array<any>=["Fuly","Semi","UnFurnished"]
  gateEntrance:Array<any>=["North","West","South","East"]
  nextClicked:boolean=false;
  propertyView:IPropertyBase={
    Id:0,
    Image:'',
    Name:'',
    Price:0,
    SellRent:0,
    PType:'',
    FType:'',
    BHK:null,
    BuiltArea:0,
    City:'',
    RTM:0
  };
  property=new Property();
  // @ViewChild("form")
  // addPropertyForm!: NgForm;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private housingService:HousingService,
    private alertify :AlertifiyService
    ) { }

  ngOnInit() {
    this.createAddPropertyForm();
  }
  createAddPropertyForm(){
      this.addPropertyForm=this.fb.group({
         BasicInfo:this.fb.group({
          SellRent: ['1' , Validators.required],
           BHK: [null, Validators.required],
          PType: [null, Validators.required],
                FType: [null, Validators.required],
                Name: [null, Validators.required],
                City: [null, Validators.required]
        }),
        PriceInfo:this.fb.group({
          Price: [null, Validators.required],
          BuiltArea: [null, Validators.required],
          CarpetArea: [null],
          Security: [0],
          Maintenance: [0],
        }),
        AddressInfo:this.fb.group({
          FloorNo: [null],
          TotalFloor: [null],
          Address: [null, Validators.required],
          LandMark: [null],
        }),
        OtherInfo:this.fb.group({
          RTM: [null, Validators.required],
          PossessionOn: [null, Validators.required],
          AOP: [null],
          Gated: [null],
          MainEntrance: [null],
          Description: [null]
        })
      }

        );
  }
  onBack(){
      this.router.navigate(['/'])
  }
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.nextClicked=true;
    if(this.allTabsValid())
    {
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success("Form saved Successfuly");
      console.log(this.addPropertyForm);
      if(this.SellRent.value==="2")
      {
        this.router.navigate(["/rent-property"]);
      }
      else{
        this.router.navigate(["/"]);
      }
    }
    else{
      this.alertify.error("Please complete form and submit.");
    }

  }
  mapProperty():void
  {
        this.property.Id=this.housingService.newPropId();
        this.property.SellRent = +this.SellRent.value;
        this.property.BHK = this.BHK.value;
        this.property.PType = this.PType.value;
        this.property.Name = this.Name.value;
        this.property.City = this.City.value;
        this.property.FType = this.FType.value;
        this.property.Price = this.Price.value;
        this.property.Security = this.Security.value;
        this.property.Maintenance = this.Maintenance.value;
        this.property.BuiltArea = this.BuiltArea.value;
        this.property.CarpetArea = this.CarpetArea.value;
        this.property.FloorNo = this.FloorNo.value;
        this.property.TotalFloors = this.TotalFloor.value;
        this.property.Address = this.Address.value;
        this.property.Address2 = this.LandMark.value;
        this.property.RTM = this.RTM.value;
        this.property.AOP = this.AOP.value;
        this.property.Gated = this.Gated.value;
        this.property.MainEntrance = this.MainEntrance.value;
        this.property.Possession =this.PossessionOn.value;
        this.property.Description = this.Description.value;
        this.property.PostedOn=new Date().toString();
  }
  // #region form groups
get BasicInfo(){
  return this.addPropertyForm.controls['BasicInfo'] as FormGroup
}
get PriceInfo(){
  return this.addPropertyForm.controls['PriceInfo'] as FormGroup
}
get AddressInfo(){
  return this.addPropertyForm.controls['AddressInfo'] as FormGroup
}
get OtherInfo(){
  return this.addPropertyForm.controls['OtherInfo'] as FormGroup
}
 // #region <Form Controls>
 get SellRent() {
  return this.BasicInfo.controls["SellRent"] as FormControl;
}

get BHK() {
  return this.BasicInfo.controls["BHK"] as FormControl;
}

get PType() {
  return this.BasicInfo.controls["PType"] as FormControl;
}

get FType() {
  return this.BasicInfo.controls["FType"] as FormControl;
}

get Name() {
  return this.BasicInfo.controls["Name"] as FormControl;
}

get City() {
  return this.BasicInfo.controls["City"] as FormControl;
}

get Price() {
  return this.PriceInfo.controls["Price"] as FormControl;
}

get BuiltArea() {
  return this.PriceInfo.controls["BuiltArea"] as FormControl;
}

get CarpetArea() {
  return this.PriceInfo.controls["CarpetArea"] as FormControl;
}

get Security() {
  return this.PriceInfo.controls["Security"] as FormControl;
}

get Maintenance() {
  return this.PriceInfo.controls["Maintenance"] as FormControl;
}

get FloorNo() {
  return this.AddressInfo.controls["FloorNo"] as FormControl;
}

get TotalFloor() {
  return this.AddressInfo.controls["TotalFloor"] as FormControl;
}

get Address() {
  return this.AddressInfo.controls["Address"] as FormControl;
}

get LandMark() {
  return this.AddressInfo.controls["LandMark"] as FormControl;
}

get RTM() {
  return this.OtherInfo.controls["RTM"] as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls["PossessionOn"] as FormControl;
}

get AOP() {
  return this.OtherInfo.controls["AOP"] as FormControl;
}

get Gated() {
  return this.OtherInfo.controls["Gated"] as FormControl;
}

get MainEntrance() {
  return this.OtherInfo.controls["MainEntrance"] as FormControl;
}

get Description() {
  return this.OtherInfo.controls["Description"] as FormControl;
}

// #endregion
// #endregion
selectTab(tabId: number,isCurrentTabValid : Boolean)
{
    this.nextClicked=true;
    if (this.formTabs?.tabs[tabId] && isCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {

         if (this.formTabs?.tabs[0]) {
      this.formTabs.tabs[0].active = true;
    }

        return false;
    }

    if (this.PriceInfo.invalid) {
      if (this.formTabs?.tabs[1]) {
        this.formTabs.tabs[1].active = true;
      }
        return false;
    }

    if (this.AddressInfo.invalid) {
      if (this.formTabs?.tabs[2]) {
        this.formTabs.tabs[2].active = true;
      }
        return false;
    }

    if (this.OtherInfo.invalid) {
      if (this.formTabs?.tabs[3]) {
        this.formTabs.tabs[3].active = true;
      }
        return false;
    }
    return true;
}
  // onSubmit(){
  //   console.log(this.addPropertyForm);
  // }
}
