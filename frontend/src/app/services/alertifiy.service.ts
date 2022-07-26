import { Injectable } from '@angular/core';
import * as alertifiy from 'alertifyjs'
@Injectable({
  providedIn: 'root'
})
export class AlertifiyService {

constructor() { }
success(message:string)
{
  alertifiy.success(message);
}
error(message:string)
{
  alertifiy.error(message);
}
warning(message:string)
{
  alertifiy.warning(message);
}
}
