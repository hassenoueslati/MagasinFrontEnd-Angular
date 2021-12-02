import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../model/Facture';
@Injectable({
  providedIn: 'root'
})
export class FactureService {
  url: string = 'http://localhost:8081/SpringMVC/facture/'
  constructor(private http: HttpClient) { }
  public addFacture(Facture: Facture) {

    return this.http.post<Facture>(this.url + 'add-facture', Facture);
  }
}
