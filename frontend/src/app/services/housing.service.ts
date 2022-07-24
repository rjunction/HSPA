import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient){

  }
  getAllProperties(SellRent : Number):Observable<IProperty[]>{
    //return this.http.get('data/properties.json');
    return this.http.get<any[]>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray:Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id as keyof object].SellRent==SellRent){
          propertiesArray.push(data[id as keyof object]);
          }
        }
        return propertiesArray;
      }
      )
    );

  }
}
