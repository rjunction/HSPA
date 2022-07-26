import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifiyService } from 'src/app/services/alertifiy.service';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!:FormGroup;
  user!: User;
  userSubmitted:boolean=false;
  constructor(private fb:FormBuilder,private userService:UserService,private alertify: AlertifiyService) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup(
    //   {
    //     userName:new FormControl(null,Validators.required),
    //     email:new FormControl(null,[Validators.required,Validators.email]),
    //     password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confirmPassword:new FormControl(null,Validators.required),
    //     mobile:new FormControl(null,[Validators.required,Validators.minLength(10)])
    //   },this.passwordMatchingValidator
    // );
    this.createRegistrationForm();
  }
onSubmit(){
  //this.user=Object.assign(this.user,this.registrationForm.value);
  console.log(this.user);
  console.log(this.registrationForm);
  this.userSubmitted=true;
  if(this.registrationForm.valid)
  {
      this.userService.addUser(this.userData());
  this.registrationForm.reset();
  this.userSubmitted=false;
  this.alertify.success("Congratulations, You have submited registration form.");
  }
  else{
    this.alertify.error("Please complete the form and submit");
  }

}
userData():User{
  console.log('sss');
  return this.user={
    email:this.email.value,
    userName:this.userName.value,
    mobile:this.mobile.value,
    password:this.password.value
  }
}
passwordMatchingValidator(fg:AbstractControl):ValidationErrors|null{
  return fg.get("password")?.value===fg.get("confirmPassword")?.value? null:
  {
    notmatched:true
  };
}
get userName(){
  return this.registrationForm.get("userName") as FormControl;
}
get email(){
  return this.registrationForm.get("email") as FormControl;
}
get password(){
  return this.registrationForm.get("password") as FormControl;
}
get confirmPassowrd(){
  return this.registrationForm.get("confirmPassword") as FormControl;
}
get mobile(){
  return this.registrationForm.get("mobile") as FormControl;
}
createRegistrationForm(){
  const formOptions: AbstractControlOptions = {
    validators: this.passwordMatchingValidator
  }
  this.registrationForm=this.fb.group(  {
    userName:[null,Validators.required],
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.minLength(8)]],
    confirmPassword:[null,Validators.required],
    mobile:[null,[Validators.required,Validators.minLength(10)]]
  },formOptions);
}

}
