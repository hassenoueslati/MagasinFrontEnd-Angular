import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/User";
import {MatDialog , MatDialogConfig} from "@angular/material/dialog";
import { MatDialogRef} from "@angular/material/dialog";
import {HeaderComponent} from "../../header/header.component";
import {RegisterUserComponent} from "../register/register-user.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  erreur=0;
  success=0;

  constructor(private auth : AuthService,private router : Router , public dialogRef : MatDialogRef<HeaderComponent>,  private dialog : MatDialog) { }
  ngOnInit(): void {
  }

  onLoggedIn(){
    this.auth.getUserFromDB(this.user.email).subscribe((usr:User)=> {
     if (usr.password==this.user.password)
     {
       this.auth.signIn(usr);
       this.onClose();



     }
     else
       this.erreur=1;
    },(err)=>console.log(err));
  }
  onClose(){
    this.dialogRef.close();
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;

    this.dialog.open(RegisterUserComponent,dialogConfig);
  }
  save (){

    this.user= new User();
  }
}
