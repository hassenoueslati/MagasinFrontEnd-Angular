import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fournisseur} from "../model/Fournisseur";
import {FournisseurService} from "../services/fournisseur.service";
import {Produit} from "../model/Produit";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  @Input() fournisseur : Fournisseur;
  @Output() deleteNotifEvent = new EventEmitter<Fournisseur>();
  @Output() updateNotifEvent = new EventEmitter<Fournisseur>();

  constructor() { }

  ngOnInit(): void {

  }

  deleteNotif(){
    this.deleteNotifEvent.emit(this.fournisseur)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.fournisseur)
  }
}
