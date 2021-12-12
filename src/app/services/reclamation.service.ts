import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from 'src/app/model/Stock';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }


  addReclamation(data:any){
    console.log(data)
    return this.http.post("http://localhost:8089/SpringMVC/reclamation/add-reclamation",data,{observe:'response'});
  }
}
