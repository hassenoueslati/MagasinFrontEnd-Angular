import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fournisseur} from "../model/Fournisseur";
import {Produit} from "../model/Produit";

@Component({
  selector: 'app-fournisseur-form-add',
  templateUrl: './fournisseur-form-add.component.html',
  styleUrls: ['./fournisseur-form-add.component.css']
})
export class FournisseurFormAddComponent implements OnInit {
  @Input() fournisseur : Fournisseur;
  @Output() addEvent= new EventEmitter<Fournisseur>();
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.fournisseur);
    this.fournisseur = new Fournisseur();
  }

}
