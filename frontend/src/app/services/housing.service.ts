import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient){

  }
  getProperty(id:number)
  {
return this.getAllProperties().pipe(
 map(propertiesArray=>{
    return propertiesArray.find(p=>p.Id===id);
   })
);
  }
  getAllProperties(SellRent? : Number):Observable<Property[]>{
    //return this.http.get('data/properties.json');
    return this.http.get<Property[]>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray:Array<Property>=[];
        const localProperties=JSON.parse(localStorage.getItem("newProp") as string)
        if(localProperties)
        {
          for(const id in localProperties){
            if(SellRent)
            {
              if(localProperties.hasOwnProperty(id) && localProperties[id as keyof object].SellRent==SellRent){
                propertiesArray.push(localProperties[id as keyof object]);
                }
            }
            else{
              propertiesArray.push(localProperties[id as keyof object]);
            }

          }
        }
        for(const id in data){
          if(SellRent)
          {
            if(data.hasOwnProperty(id) && data[id as keyof object].SellRent==SellRent){
              propertiesArray.push(data[id as keyof object]);
              }
          }
          else{
            propertiesArray.push(data[id as keyof object]);
          }

        }
        return propertiesArray;
      }
      )
    );

  }
  newPropId():number{
    if(localStorage.getItem('PID'))
    {
      localStorage.setItem('PID',String(parseInt(localStorage.getItem('PID') as string)+1))
      return +(localStorage.getItem('PID') as string);
    }
    else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
  addProperty(property:Property)
  {
    let newProp=[property];
    if(localStorage.getItem("newProp"))
    {
      newProp=[property,...JSON.parse(localStorage.getItem("newProp") as string)];
    }
    localStorage.setItem('newProp',JSON.stringify(newProp));
  }
}
