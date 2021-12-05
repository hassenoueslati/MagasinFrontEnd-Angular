import { Component, OnInit } from '@angular/core';
import {AuthService} from "../User/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService :AuthService , private router : Router) { }

  ngOnInit() {
    let isloggedin : string | null;
    let loggedUser :string | null;

    isloggedin = localStorage.getItem('isLogged');
    loggedUser = localStorage.getItem('loggedUser');
    if(isloggedin!="true" || !loggedUser)
      this.router.navigate(['/login'])
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
onLogout(){
    this.authService.logout()
}
}
