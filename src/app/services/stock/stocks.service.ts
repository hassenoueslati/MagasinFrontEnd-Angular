import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StocksService {


  constructor(private http:HttpClient) { }

  getAllStocks(){
    return this.http.get("http://localhost:8089/SpringMVC/stock/retrieveAllStocks");
  }

  deleteStock(id:any){
    return this.http.delete("http://localhost:8089/SpringMVC/stock/remove-stock/"+id);
  }

  addStock(data:any){
    return this.http.post("http://localhost:8089/SpringMVC/stock/add-stock",data,{observe:'response'});
  }
}
