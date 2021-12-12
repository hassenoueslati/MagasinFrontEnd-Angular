import { Component, OnInit } from '@angular/core';
import {AuthService} from "../User/services/auth.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public authService :AuthService) { }

  ngOnInit(): void {
    let loggedUser :string ;
    // @ts-ignore
    loggedUser = localStorage.getItem('loggedUser');

    this.authService.setLoggedUserFromLocalStorage(loggedUser);


  }

}
