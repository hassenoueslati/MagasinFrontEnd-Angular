import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../model/Produit";
import {DetailProduit} from "../model/DetailProduit";
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  @Input() produit : Produit;
  detailProduit : DetailProduit;
  idProduit: number;
  constructor(private produitService : ProduitService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.idProduit = JSON.parse(params.get('id')!)

    });
    this.getProduit(this.produit.idProduit);
    console.log(this.produit);
  }
  getProduit(idProduit: number){
    this.produitService.getProduitService(this.idProduit).subscribe((data: any) => {
      console.log(data);
      this.produit = data
    });
  }
}
