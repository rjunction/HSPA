import { Component, Input } from "@angular/core";
import { IProperty } from "src/app/model/IProperty";
import { IPropertyBase } from "src/app/model/IPropertyBase";

@Component(
  {
    // template:`<h2>This is property</h2>`,
    templateUrl:'property-card.component.html',
    selector:'app-property-card',
    styleUrls:['property-card.component.css']
    //styles:['h2{font-weight:normal;}']
  }
)

export class PropertyCardComponent{
  @Input() property!: IPropertyBase;
  @Input() hideIcons:boolean=false;
}
