import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  myFormUpdate:FormGroup;
  showFormTemplate: boolean=false;
  showFormUpdate:boolean=false;
  data={
    "libelle":String,
    "prixUnitaire":String,
  }
  search: string;
  searchQte: number;
  constructor(private stockService:StocksService,private router:Router,private formBuilder:FormBuilder) { }
  tabTemporary = [];
  ngOnInit(): void {

 
    
    this.showFormTemplate=false;
    this.stockService.sharedUser.subscribe(
      (data:Stock)=>
      {this.stock=data},
      ()=>{},
      ()=>{this.stock = new Stock()}
    )
    this.getStockById(localStorage.getItem("idStockUpdate"));
    this.stock=new Stock();


    
    this.getAllStocks();
    this.myForm=this.formBuilder.group({
      'libelleStock':['',[Validators.required]],
      'qte':['',[Validators.required, Validators.min(1)]],
      'qteMin':['',[Validators.required]]
    })

    this.myFormUpdate=this.formBuilder.group({
      'libelleStock':['',[Validators.required]],
      'qte':['',[Validators.required]],
      'qteMin':['',[Validators.required]]
    })
  }

  searchFn(search: any) {
      console.log(search);
      if(search) {
       let filtered = this.tab.filter((stock: any) => stock.libelleStock.toLowerCase().includes(search.toLowerCase()))
        this.tab = filtered;
      } else {
        this.tab = this.tabTemporary
      }
  }


  addStock(){
    if (this.myForm.invalid) {
      return;
    }
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
  getStockById(id:any){
    this.stockService.getStockById(id).subscribe((res)=>{})
  }
  showFormUpdates(id:any){
    this.getStockById(id);
    if (this.showFormUpdate ===false){
      this.showFormUpdate = true
      
      this.stockService.sharedUser.subscribe(
        (data:Stock)=>
        {this.stock=data},
        ()=>{},
        ()=>{this.stock = new Stock()}
      )
      
    }
    else {
     
      this.showFormUpdate = false
    }
  }
  showFormUpdatess(){
    if (this.showFormUpdate ===false){
      this.showFormUpdate = true
    }
    else {
     
      this.showFormUpdate = false
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
      this.tabTemporary=res;
    
    }),()=>alert("aucun stock")
  }

  updateStock(id:Number){
    if (this.myFormUpdate.invalid) {
      return;
    }
    this.stockService.updateStock(this.stock,id).subscribe((res)=>{
      alert("Stock Updated");
      this.getAllStocks();
    }),()=>alert("error update");
  }
}


