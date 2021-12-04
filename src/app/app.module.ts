import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WapperComponent } from './wapper/wapper.component';

import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { FactureComponent } from './facture/facture.component';

import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { UserComponent } from './user/user.component';
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock/stock.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RayonComponent } from './rayon/rayon.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ProduitMainComponent } from './produit-main/produit-main.component';
import { ProduitFormAddComponent } from './produit-form-add/produit-form-add.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WapperComponent,
    SidebarWrapperComponent,
    FactureComponent,
    UserComponent,
    ProduitComponent,
    StockComponent,
    ReclamationComponent,
    RayonComponent,
    FournisseurComponent,
    DetailProduitComponent,
    DetailFactureComponent,
    ProduitMainComponent,
    ProduitFormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
