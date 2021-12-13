import { Component, OnInit } from '@angular/core';
import {Produit} from "../../model/Produit";
import {ProduitService} from "../../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit-main',
  templateUrl: './produit-main.component.html',
  styleUrls: ['./produit-main.component.css']
})
export class ProduitMainComponent implements OnInit {
  listProduit: Produit[];
  produit : Produit;
  showFormTemplate: boolean;
  buttonValue: string;
  inputProduit: Produit ;
  inputLibelle : String;
  searchProduit : Produit[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new Product";
    this.produitService.getListProduitService().subscribe(
      (data)=> this.searchProduit = this.listProduit = data
    )
  }

  search(query: string){
  this.searchProduit = (query) ?
    this.listProduit.filter(produit => produit.libelle.toLowerCase().includes(query.toLowerCase())|| produit.code.toLowerCase().includes(query.toLowerCase()) || produit.categorieProduit.toLowerCase().includes(query.toLowerCase()) ) : this.listProduit ;
  }

  save(produit: Produit): void{
    let i = this.listProduit.indexOf(produit);
    if(i!= -1){
      this.produitService.updateProduitService(produit).subscribe(
        ()=>{this.listProduit[i]= produit;
          this.showFormTemplate = false}
      )
      alert("Product updated successfully");
    }
    else {
      produit.nbLike=0;
      this.showFormTemplate = false
      this.produitService.addProduitService(produit).subscribe(
        ()=>this.listProduit.push(produit)
      )
      alert("Product added successfully");
    }
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputProduit = new Produit();
    }
    else {
      this.buttonValue="add new Produit";
      this.showFormTemplate = false
    }
  }

  delete(produit:Produit): void{
    let i = this.listProduit.indexOf(produit);
    this.produitService.deleteProduitService(produit.idProduit).subscribe(
      ()=>this.listProduit.splice(i,1)
    )
    alert("Product deleted successfully");
  }
  update(product: Produit): void{
    this.inputProduit = product;
    this.showFormTemplate = true;

  }
  TreeASC(){
    this.produitService.getListProduitPRIXASCService().subscribe(
      (data)=> this.searchProduit = data
    )
  }
  TreeDESC(){
    this.produitService.getListProduitPRIXDESCService().subscribe(
      (data)=> this.searchProduit = data
    )
  }
  like(produit: Produit): void{
    let i = this.listProduit.indexOf(produit);
    this.listProduit[i].nbLike++
  }

}
