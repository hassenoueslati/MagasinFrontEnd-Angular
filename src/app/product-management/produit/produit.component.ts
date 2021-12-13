import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Produit} from "../../model/Produit";
import {ProduitService} from "../../services/produit.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() produit : Produit;
  @Input() ListProduct: Produit[];
  @Output() deleteNotifEvent = new EventEmitter<Produit>();
  @Output() updateNotifEvent = new EventEmitter<Produit>();
  @Output() notification = new EventEmitter<Produit>();
  constructor() { }

  ngOnInit(): void {
  }
  notifierParent(){
    this.notification.emit(this.produit)
  }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.produit)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.produit)
  }


}
