import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { HomeComponent } from './home/home.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock-management/stock/stock.component';
import { ReclamationComponent } from './reclamation-management/reclamation/reclamation.component';
import { RayonComponent } from './rayon-management/rayon/rayon.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import {MainUserComponent} from "./user-management/main-user/main-user.component";
import {LoginComponent} from "./user-management/login/login.component";
import {ProduitMainComponent} from "./produit-main/produit-main.component";
import {FournisseurMainComponent} from "./fournisseur-main/fournisseur-main.component";
import {RegisterUserComponent} from "./user-management/register/register-user.component";
import {ProfilComponent} from "./user-management/profil/profil.component";
import {ListUserComponent} from "./user-management/list-user/list-user.component";
import {MainRayonComponent} from "./rayon-management/main-rayon/main-rayon.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'produit', component: ProduitMainComponent},
  {path: 'fournisseur', component: FournisseurMainComponent},
  {path: 'detailProduit', component: DetailProduitComponent},
  {path: 'detailFacture', component: DetailFactureComponent},
  { path: 'UserManagement', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'RayonManagement', loadChildren: () => import('./rayon-management/rayon-management.module').then(m => m.RayonManagementModule) },
  { path: 'StockManagement', loadChildren: () => import('./stock-management/stock-management.module').then(m => m.StockManagementModule) },
  { path: 'ReclamationManagement', loadChildren: () => import('./reclamation-management/reclamation-management.module').then(m => m.ReclamationManagementModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
