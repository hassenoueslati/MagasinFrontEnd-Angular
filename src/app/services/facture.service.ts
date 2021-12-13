import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../model/Facture';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FactureService {
 
  constructor(private http: HttpClient) { }
 
  url: string = 'http://localhost:8089/SpringMVC/facture/'
  public AllFacture(): Observable<Facture[]> {

    return this.http.get<Facture[]>(this.url + 'retrieve-all-factures');
  }
  public delete(id: number) {
    return this.http.delete<Facture>(this.url + 'remove-facture/' + id);
  }
  public addFacture(facture: Facture) {

    return this.http.post<Facture>(this.url + 'add-facture', facture);
  }
  
  findById(id: number): Observable<any> {
    return this.http.get(`${this.url}retrieve-facture/${id}`);
  }
  updateFacturee(id: number,facture: Facture){
    
    return this.http.put<Facture>(this.url + 'updateFac/' + id, facture);
  }
  
 
 
}
