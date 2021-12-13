import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produit} from "../../model/Produit";

@Component({
  selector: 'app-produit-form-add',
  templateUrl: './produit-form-add.component.html',
  styleUrls: ['./produit-form-add.component.css']
})
export class ProduitFormAddComponent implements OnInit {
  @Input() produit : Produit;
  @Output() addEvent=new EventEmitter<Produit>();

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.produit);
    this.produit = new Produit();
  }

}
