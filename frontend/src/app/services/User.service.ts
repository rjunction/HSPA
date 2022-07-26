import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
addUser(user: any){
  let users=[];
  if(localStorage.getItem("users"))
  {
    users=JSON.parse(localStorage.getItem("users") as string);
    users=[user,...users];
  }
  else
  {
    users=[user];
  }
  localStorage.setItem("users",JSON.stringify(users));
}
}

