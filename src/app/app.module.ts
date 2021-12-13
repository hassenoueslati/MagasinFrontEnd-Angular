import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WapperComponent } from './wapper/wapper.component';

import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';



import { ProduitComponent } from './produit/produit.component';
import { StockComponent } from './stock/stock.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RayonComponent } from './rayon/rayon.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { MainUserComponent } from './User/main-user/main-user.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './User/login/login.component';
import {ProduitMainComponent} from "./produit-main/produit-main.component";
import {ProduitFormAddComponent} from "./produit-form-add/produit-form-add.component";
import {FournisseurFormAddComponent} from "./fournisseur-form-add/fournisseur-form-add.component";
import {FournisseurMainComponent} from "./fournisseur-main/fournisseur-main.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './User/register/register-user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from "@angular/material/input";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { DataTablesModule } from 'angular-datatables';


import { ToastrModule } from 'ngx-toastr';







const appRoutes: Routes = [





];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WapperComponent,

    SidebarWrapperComponent,
  
    ProduitComponent,
    StockComponent,
    ReclamationComponent,
    RayonComponent,
    FournisseurComponent,
    DetailProduitComponent,
 
    MainUserComponent,
    ListUserComponent,
    LoginComponent,
    ProduitMainComponent,
    ProduitFormAddComponent,
    FournisseurFormAddComponent,
    FournisseurMainComponent,
    RegisterUserComponent,

  
    
 
  
   
  

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
    ToastrModule.forRoot(
      {timeOut:10000000,
        progressBar:true,
        progressAnimation: 'increasing',
        preventDuplicates: true


      }
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
