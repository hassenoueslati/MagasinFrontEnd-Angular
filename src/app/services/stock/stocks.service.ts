import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'src/app/model/Stock';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  stock:Stock=new Stock();
  tab:any=[];
  public curStock= new BehaviorSubject(this.stock);
  sharedUser = this.curStock.asObservable();

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

  updateStock(data:any,id:any){
    return this.http.put("http://localhost:8089/SpringMVC/stock/modify-stock/"+id,data).pipe(map((res) => {
       this.tab=res;
        this.curStock.next(this.tab);
        localStorage.removeItem("idStockUpdate");
        localStorage.setItem("idStockUpdate",id);
    }));
  }


  getStockById(id:any){
    return this.http.get("http://localhost:8089/SpringMVC/stock/retrieve-stock/"+id).pipe(map((res)=>{
      this.tab=res;
      this.curStock.next(this.tab);
    }));
  }
}
