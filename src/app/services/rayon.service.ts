import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rayon} from "../model/Rayon";


const baseUrl ='http://localhost:8089/SpringMVC/Rayon';
@Injectable({
  providedIn: 'root'
})
export class RayonService {
  rayon : Rayon=new Rayon();
  constructor(private http: HttpClient) { }

  getListRayon(): Observable<Rayon[]>{
    return this.http.get<Rayon[]>(`${baseUrl}/AllRayon`);
  }
  addRayon(rayon:Rayon){
    return this.http.post(`${baseUrl}/AddRayon`, rayon);
  }
  deleteRayon(idRayon:number){
    return this.http.delete(`${baseUrl}/DeleteRayon/${idRayon}`)
  }
  updateRayon(rayon: Rayon){
    return this.http.put(`${baseUrl}/modifyRayon`, rayon);
  }
}
