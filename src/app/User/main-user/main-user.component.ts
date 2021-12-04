import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {
  listUser : User[]

  constructor(private UserService : UserService) { }

  ngOnInit(): void {
    this.UserService.getAll().subscribe(
      (data:User[])=> this.listUser=data
    )

  }

  delete(u : User){
    let i = this.listUser.indexOf(u);
    this.UserService.delete(u.idUser).subscribe(
      ()=>this.listUser.splice(i,1)
    )
  }
}
