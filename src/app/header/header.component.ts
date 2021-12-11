import { Component, OnInit } from '@angular/core';
import {AuthService} from "../User/services/auth.service";
import {Router} from "@angular/router";
import {MatDialog , MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "../User/login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService :AuthService , private router : Router, private dialog : MatDialog) { }

  ngOnInit() {
    let isloggedin : string | null;
    let loggedUser :string | null;

    isloggedin = localStorage.getItem('isLogged');
    loggedUser = localStorage.getItem('loggedUser');
    if(isloggedin!="true" || !loggedUser)
      this.router.navigate(['/'])
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
onLogout(){
    this.authService.logout()
}
onCreate(){
const dialogConfig = new MatDialogConfig();
dialogConfig.autoFocus=true;

  this.dialog.open(LoginComponent,dialogConfig);
}
}
