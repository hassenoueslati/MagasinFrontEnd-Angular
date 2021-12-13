import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:8089/SpringMVC/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/getUser`);
  }
  delete(idUser: any): Observable<any> {
    return this.http.delete(`${baseUrl}/removeUser/${idUser}`);
  }
  register(user:User) {
    return this.http.post(`${baseUrl}/addUser`,user,{observe:"response"});
  }
  findByCategory(categorieClient: CategorieClient): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/retrieveUserByCategory/${categorieClient}`);
  }
  update (user : User){
    return this.http.put(`${baseUrl}/modifyUser`, user)
  }
}
