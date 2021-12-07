import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../model/Produit";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  @Input() produit : Produit;
  constructor() { }

  ngOnInit(): void {
  }

}
