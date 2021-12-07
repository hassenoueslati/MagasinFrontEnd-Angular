import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Produit} from "../model/Produit";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input()produit : Produit;
  @Input()ListProduct: Produit[];
  @Output() deleteNotifEvent = new EventEmitter<Produit>();
  @Output() updateNotifEvent = new EventEmitter<Produit>();
  @Output() showdetailNotifEvent = new EventEmitter<Produit>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.produit)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.produit)
  }
  showdetailNotif(){
    this.showdetailNotifEvent.emit(this.produit)
  }

}
