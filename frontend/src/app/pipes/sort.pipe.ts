import { Pipe, PipeTransform } from '@angular/core';
import { IProperty } from '../model/IProperty';
import { IPropertyBase } from '../model/IPropertyBase';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    console.log(value);
    const sortField=args[0];
    const sortDirection=args[1];
    let muliplier=1;
    if(sortDirection==="desc")
    {
      muliplier=-1;
    }

    value.sort((a:any,b:any)=>{

if(a[sortField]<b[sortField])
{
  return -1*muliplier;
}
else if(a[sortField]>b[sortField])
{
  return 1*muliplier;
}
else{
  return 0;
}
    });
    return value;
  }

}
