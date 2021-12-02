import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { HomeComponent } from './home/home.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { UserComponent } from './user/user.component';
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock/stock.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RayonComponent } from './rayon/rayon.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'user', component: UserComponent},
  {path: 'produit', component: ProduitComponent},
  {path: 'stock', component: StockComponent},
  {path: 'reclamation', component: ReclamationComponent},
  {path: 'rayon', component: RayonComponent},
  {path: 'fournisseur', component: FournisseurComponent},
  {path: 'detailProduit', component: DetailProduitComponent},
  {path: 'detailFacture', component: DetailFactureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
