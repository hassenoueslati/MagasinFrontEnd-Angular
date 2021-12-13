import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/Produit";
import {Fournisseur} from "../model/Fournisseur";

const baseUrl ='http://localhost:8089/SpringMVC/fournisseur';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }

  getListFournisseurService(): Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(`${baseUrl}/retrieve-all-fournisseurs`);
  }
  addFournisseurService(fournisseur:Fournisseur){
    return this.http.post(`${baseUrl}/add-fournisseur`, fournisseur);
  }
  deleteFournisseurService(idfournissseur:number){
    return this.http.delete(`${baseUrl}/remove-fournissseur/${idfournissseur}`)
  }
  updateFournisseurService(fournisseur: Fournisseur){
    return this.http.put(`${baseUrl}/modify-fournisseur`, fournisseur);
  }
  
}
