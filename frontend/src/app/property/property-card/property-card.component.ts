import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

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
  @Input()property!: IProperty;
}
