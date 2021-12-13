import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule , MatDialogRef} from '@angular/material/dialog';

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
import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock-management/stock/stock.component';
import { ReclamationComponent } from './reclamation-management/reclamation/reclamation.component';
import { RayonComponent } from './rayon-management/rayon/rayon.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { MainUserComponent } from './user-management/main-user/main-user.component';
import { ListUserComponent } from './user-management/list-user/list-user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './user-management/login/login.component';
import {ProduitMainComponent} from "./produit-main/produit-main.component";
import {ProduitFormAddComponent} from "./produit-form-add/produit-form-add.component";
import {FournisseurFormAddComponent} from "./fournisseur-form-add/fournisseur-form-add.component";
import {FournisseurMainComponent} from "./fournisseur-main/fournisseur-main.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './user-management/register/register-user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from "@angular/material/input";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { DataTablesModule } from 'angular-datatables';
import { ProfilComponent } from './user-management/profil/profil.component';
import { UserFormUpdateComponent } from './user-management/user-form-update/user-form-update.component';
import { MainRayonComponent } from './rayon-management/main-rayon/main-rayon.component';
import { RayonFormAddComponent } from './rayon-management/rayon-form-add/rayon-form-add.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent}




];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WapperComponent,
    SidebarWrapperComponent,
    FactureComponent,
    ProduitComponent,
    FournisseurComponent,
    DetailProduitComponent,
    DetailFactureComponent,
    ProduitMainComponent,
    ProduitFormAddComponent,
    FournisseurFormAddComponent,
    FournisseurMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    NgbDatepickerModule,



    DataTablesModule,


  ],
  providers: [{provide:MatDialogRef , useValue:{} }],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
