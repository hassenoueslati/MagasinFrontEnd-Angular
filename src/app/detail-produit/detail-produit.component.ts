import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../model/Produit";
import {DetailProduit} from "../model/DetailProduit";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  @Input() produit : Produit;
  detailProduit : DetailProduit;
  constructor() { }

  ngOnInit(): void {
  }

}
