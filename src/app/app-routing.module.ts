import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';


import { StockComponent } from './stock/stock.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RayonComponent } from './rayon/rayon.component';

import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import {MainUserComponent} from "./User/main-user/main-user.component";
import {LoginComponent} from "./User/login/login.component";
import {ProduitMainComponent} from "./produit-main/produit-main.component";
import {FournisseurMainComponent} from "./fournisseur-main/fournisseur-main.component";
import {RegisterUserComponent} from "./User/register/register-user.component";

import { DepartementComponent } from './departement-management/departement/departement.component';
import { DepartementMainComponent } from './departement-management/departement-main/departement-main.component';








const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
 
  {path: 'user', component: MainUserComponent},
  {path: 'produit', component: ProduitMainComponent},
  {path: 'stock', component: StockComponent},
  {path: 'reclamation', component: ReclamationComponent},
  {path: 'rayon', component: RayonComponent},
  {path: 'fournisseur', component: FournisseurMainComponent},
  {path: 'detailProduit', component: DetailProduitComponent},
  
 
  {path: 'register',component: RegisterUserComponent },
  { path: 'FactureManagement', loadChildren: () => import('./facture-management/facture-management.module').then(m => m.FactureManagementModule) },
  { path: 'DepartementManagement', loadChildren: () => import('./departement-management/departement-management.module').then(m => m.DepartementManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
