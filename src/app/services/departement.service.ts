import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../model/Departement';
const baseUrl ='http://localhost:8089/SpringMVC/departement';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

 
  constructor(private http: HttpClient) { }

  getListDepartementService(): Observable<Departement[]>{
    return this.http.get<Departement[]>(`${baseUrl}/retrieve-all-departements`);
  }
  addDepartement(Departement:Departement){
    return this.http.post(`${baseUrl}/add-departement`, Departement);
  }
  deleteDepartement(idDepartement:number){
    return this.http.delete(`${baseUrl}/remove-departement/${idDepartement}`)
  }
  updateDepartement(Departement: Departement){
    return this.http.put(`${baseUrl}/modify-departement`, Departement);
  }
}
