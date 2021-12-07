import { Injectable } from '@angular/core';
import {Role} from "../../model/Role";
import {Router} from "@angular/router";
import {Observable, Observer} from "rxjs";
import {User} from "../../model/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser:string | undefined;
  public isLogged : boolean=false;
  public roles : Role[] | undefined;

  apiURL : string = "http://localhost:8089/SpringMVC/User/log"


  constructor(private router : Router, private http: HttpClient) { }


  getUserFromDB(email:String):Observable<User>{
     const url = `${this.apiURL}/${email}`;
    return this.http.get<User>(url);

  }
  signIn(user:User) {
    this.loggedUser = user.nom;
    this.isLogged = true;
    this.roles = user.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isLogged))
  }
  isAdmin():Boolean {
    let admin: Boolean = false;
    if (!this.roles)//this.roles==undefiened
      return false;
    this.roles.forEach((curRole) => {
      if (curRole.role == 'ADMIN') {
        admin = true;
      }
    });
    return admin;
  }
  getUserRoles(email:string){
    this.getUserFromDB(email).subscribe((user: User) =>
    {
      this.roles = user.roles;
    });
  }
  setLoggedUserFromLocalStorage(login : string){
    this.loggedUser=login;
    this.isLogged=true;
    this.getUserRoles(login);
  }

  logout() {
    this.isLogged = false;
    this.loggedUser= undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isLogged));
    this.router.navigate(['/login']);
  }
  }
