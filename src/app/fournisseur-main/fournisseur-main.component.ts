import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../model/Fournisseur";
import {FournisseurService} from "../services/fournisseur.service";

@Component({
  selector: 'app-fournisseur-main',
  templateUrl: './fournisseur-main.component.html',
  styleUrls: ['./fournisseur-main.component.css']
})
export class FournisseurMainComponent implements OnInit {
  listFournisseur: Fournisseur[];
  showFormTemplate: boolean;
  buttonValue: string;
  inputFournisseur: Fournisseur;
  constructor(private fournisseurService : FournisseurService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new fournisseur";
    this.fournisseurService.getListFournisseurService().subscribe(
      (data)=>this.listFournisseur = data
    )
  }
  save(fournisseur: Fournisseur): void {
    let i = this.listFournisseur.indexOf(fournisseur);
    if(i!= -1){
      this.fournisseurService.updateFournisseurService(fournisseur).subscribe(
        ()=>{this.listFournisseur[i]= fournisseur;
          this.showFormTemplate = false}
      )
    }
    else {
      this.showFormTemplate = false
      this.fournisseurService.addFournisseurService(fournisseur).subscribe(
        ()=>this.listFournisseur.push(fournisseur)
      )
    }
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputFournisseur = new Fournisseur();
    }
    else {
      this.buttonValue="add new Fournisseur";
      this.showFormTemplate = false
    }
  }
  delete(fournisseur:Fournisseur): void{
    let i = this.listFournisseur.indexOf(fournisseur);
    this.fournisseurService.deleteFournisseurService(fournisseur.idFournisseur).subscribe(
      ()=>this.listFournisseur.splice(i,1)
    )
  }
  update(fournisseur: Fournisseur): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputFournisseur = fournisseur;
    this.showFormTemplate = true;

  }


}
