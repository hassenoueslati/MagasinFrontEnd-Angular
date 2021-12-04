import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/Produit";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-produit-main',
  templateUrl: './produit-main.component.html',
  styleUrls: ['./produit-main.component.css']
})
export class ProduitMainComponent implements OnInit {
  listProduit: Produit[];
  showFormTemplate: boolean;
  buttonValue: string;
  inputProduit: Produit ;
  msg: string;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new Product";
    this.produitService.getListProduitService().subscribe(
      (data)=> this.listProduit = data
    )
  }

  save(produit: Produit): void{
    let i = this.listProduit.indexOf(produit);
    if(i!= -1){
      //update a product

      this.produitService.updateProduitService(produit).subscribe(
        ()=>{this.listProduit[i]= produit;
          this.showFormTemplate = false}
      )
    }
    else {
      //add a new product
      this.showFormTemplate = false
      this.produitService.addProduitService(produit).subscribe(
        ()=>this.listProduit.push(produit)
      )
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
  }
  update(product: Produit): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputProduit = product;
    this.showFormTemplate = true;

  }

}
