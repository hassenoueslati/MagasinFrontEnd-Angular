import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../model/User";
import {Role} from "../../model/Role";
import {UserService} from "../services/user.service";
import {Produit} from "../../model/Produit";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  listUser : User[]
 user: User

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  //save (user:User):void{
    //this.userService.register(user).subscribe(
      //()=>this.user.push(user)
    //)
    //this.user= new User();
 // }
}
