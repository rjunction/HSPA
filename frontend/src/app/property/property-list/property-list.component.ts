import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent  {
  SellRent : Number=1;
  properties:Array<IPropertyBase>=[];
constructor(private housingService:HousingService,private route:ActivatedRoute){

}
ngOnInit():void{

  if(this.route.snapshot.url.toString())
  {
    console.log(this.route.snapshot.url.toString());
this.SellRent=2;
  }

this.housingService.getAllProperties(this.SellRent).subscribe(data=>this.properties=data);
 // this.http.get('data/properties.json').subscribe(data=>this.properties=data);
}
}
