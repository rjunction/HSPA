import { Injectable } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any)
{
  let users=[];
  if(localStorage.getItem("users"))
  {
    users=JSON.parse(localStorage.getItem("users") as string);

  }
  return users.find((p: { userName: any; password: any; })=>{
    return p.userName === user.userName && p.password === user.password;
  })
}
}
