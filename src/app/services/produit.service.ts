import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/Produit";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url= environment.url+"produits/"
  constructor(private http: HttpClient) { }

  getListProduitService(){
    return this.http.get<Produit[]>(this.url);
  }
  addProduitService(produit:Produit){
    return this.http.post(this.url, produit);
  }
  deleteProduitService(idProduit:number){
    return this.http.delete(this.url+idProduit)
  }
  updateProduitService(produit: Produit){
    return this.http.put(this.url+produit.idProduit, produit);
  }
  findProductByIdService(id: string){}
}
