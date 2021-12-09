import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/Produit";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
const baseUrl ='http://localhost:8089/SpringMVC/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http: HttpClient) { }

  getListProduitService(): Observable<Produit[]>{
    return this.http.get<Produit[]>(`${baseUrl}/retrieve-all-produits`);
  }
  getListProduitPRIXDESCService(): Observable<Produit[]>{
    return this.http.get<Produit[]>(`${baseUrl}/retrieveProduitParPrixdesc`);
  }
  getListProduitPRIXASCService(): Observable<Produit[]>{
    return this.http.get<Produit[]>(`${baseUrl}/retrieveProduitParPrixAsc`);
  }
  getProduitService(idproduit:number){
    return this.http.get(`${baseUrl}/retrieve-produit/${idproduit}`)
  }
  addProduitService(produit:Produit){
    return this.http.post(`${baseUrl}/add-produit`, produit);
  }
  deleteProduitService(idproduit:number){
    return this.http.delete(`${baseUrl}/remove-produit/${idproduit}`);
  }
  updateProduitService(produit: Produit){
    return this.http.put(`${baseUrl}/modify-produit`, produit);
  }
  findProductByIdService(id: string){}
}
