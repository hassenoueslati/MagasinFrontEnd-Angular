import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from '../model/Stock';
import { StocksService } from '../services/stock/stocks.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  tab:any=[];
  stock:Stock;
  myForm:FormGroup;
  showFormTemplate: boolean;
  data={
    "libelle":String,
    "prixUnitaire":String,
  }
  constructor(private stockService:StocksService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.showFormTemplate=false;
    this.stock=new Stock();
    this.getAllStocks();
    this.myForm=this.formBuilder.group({
      'libelleStock':[''],
      'qte':[''],
      'qteMin':['']
    })
  }
  addStock(){
    
    this.stockService.addStock(this.myForm.value).subscribe((res)=>{
      this.getAllStocks();
        alert("sotck added successfuly");
        this.router.navigate(['/stock']);

    }),()=>alert("error add stock")
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      
    }
    else {
     
      this.showFormTemplate = false
    }
  }
  
  deleteStockById(id:any){
    this.stockService.deleteStock(id).subscribe((res)=>{
      alert("Stock Deleted successfuly !!");
      this.getAllStocks();
    }),()=>alert("error delete");
  }
  getAllStocks(){
    
    this.stockService.getAllStocks().subscribe((res:any)=>{
      this.tab=res;
    
    }),()=>alert("aucun stock")
  }
}


