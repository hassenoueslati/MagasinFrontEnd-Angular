import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  erreur=0;
  constructor(private auth : AuthService,private router : Router) { }
  ngOnInit(): void {
  }

  onLoggedIn(){
    this.auth.getUserFromDB(this.user.email).subscribe((usr:User)=> {
     if (usr.password==this.user.password)
     {
       this.auth.signIn(usr);
       this.router.navigate(['']);
     }
     else
       this.erreur=1;
    },(err)=>console.log(err));
  }
}
