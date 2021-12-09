import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
 user: User
  myForm:FormGroup;
 data={
   "nom": String,
   "prenom":String,
   "email":String,
   "password":String,
   "dateNaissance":Date
}

  constructor(private userService : UserService, private router :Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
   this.user=new User();
   this.myForm=this.formBuilder.group({
     'nom':[''],
     'prenom':[''],
     'email':[''],
     'password':[''],
     'dateNaissance':['']

   })
  }

 addUser(){
   console.log(this.myForm.controls["dateNaissance"].value)
   this.userService.register(this.myForm.value).subscribe((data)=>{
       alert("user added succefuly")
     this.router.navigate(['/home'])
   })

 }

}
