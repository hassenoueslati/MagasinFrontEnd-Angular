import { Injectable } from '@angular/core';
import {Role} from "../model/Role";
import {Router} from "@angular/router";
import {Observable, Observer} from "rxjs";
import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser:string | undefined;
  public isLogged : boolean=false;
  public roles : Role[] | undefined;
  public idUser : any ;
  public prenom : string
  public Categ : string
  public prof : string
  public birthd : Date
  public email : string
  public image : string
  public pass : string

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
    this.idUser = user.idUser
    this.prenom = user.prenom
    this.prof = user.profession
    this.Categ = user.categorieClient
    this.email= user.email
    this.birthd = user.dateNaissance
    this.image = user.image
    this.pass = user.password
    localStorage.setItem('loggedUser', this.loggedUser)
    localStorage.setItem('idUser', this.idUser)
    localStorage.setItem('prenom', this.prenom)
    localStorage.setItem('profession', this.prof)
    localStorage.setItem('categorie', this.Categ)
    localStorage.setItem('email', this.email)
    localStorage.setItem('image', this.image)
    localStorage.setItem('pass', this.pass)

    // @ts-ignore
    localStorage.setItem('birthday', this.birthd)
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
  getUserId(email : string){
    this.getUserFromDB(email).subscribe((user:User)=>
    {
      this.idUser=user.idUser;
    })

}
  /*IsUser():Boolean{
    let user:Boolean= false;
    if(!this.idUser)
      return false;
    this.idUser.forEach((curUser: { idUser: number; }) => {
    if(curUser == this.idUser){
      user=true
    }
   });
  return user;
}*/
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
    this.router.navigate(['/']);
  }
  }
