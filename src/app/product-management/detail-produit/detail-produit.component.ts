import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../model/Produit";
import {ProduitService} from "../../services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {data} from "jquery";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  constructor(private produitService:ProduitService,private router:Router,private activated:ActivatedRoute) { }
  produit:Produit;
  ngOnInit(): void {
    this.produit=this.produitService.currentProduit;
    this.activated.paramMap.subscribe(
      (params)=> {
        let idProduit = params.get('idProduit');
        console.log(idProduit);
        this.produitService.getProduitService(idProduit).subscribe(
          (data: any) =>this.produit = data
        )
      }
    )
  }
}
