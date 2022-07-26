import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  name:string="rahul";
  // @ViewChild("form")
  // addPropertyForm!: NgForm;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack(){
      this.router.navigate(['/'])
  }
  onSubmit(form:NgForm){
    console.log(form);


  }
  // onSubmit(){
  //   console.log(this.addPropertyForm);
  // }
}
