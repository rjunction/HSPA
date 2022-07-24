import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent  {
  properties:Array<any>=[{
    "Id":1,
    "Name":"Birla House",
    "Type":"Bunglow",
    "Price":12000
  },
  {
    "Id":1,
    "Name":"Birla House",
    "Type":"Bunglow",
    "Price":12000
  },
  {
    "Id":2,
    "Name":"Baba Cottage",
    "Type":"Bunglow",
    "Price":180000
  },
  {
    "Id":3,
    "Name":"Wlow State",
    "Type":"Flat",
    "Price":14000
  },
  {
    "Id":4,
    "Name":"Gaultam Villa",
    "Type":"Villa",
    "Price":15000 },
  {
    "Id":5,
    "Name":"Ambani House",
    "Type":"Bunglow",
    "Price":12000
  }
]
}
