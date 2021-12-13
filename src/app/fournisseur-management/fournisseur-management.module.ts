import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurManagementRoutingModule } from './fournisseur-management-routing.module';
import { FournisseurManagementComponent } from './fournisseur-management.component';
import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {FournisseurFormAddComponent} from "./fournisseur-form-add/fournisseur-form-add.component";
import {FournisseurMainComponent} from "./fournisseur-main/fournisseur-main.component";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    FournisseurManagementComponent,
    FournisseurComponent,
    FournisseurFormAddComponent,
    FournisseurMainComponent
  ],
  imports: [
    CommonModule,
    FournisseurManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class FournisseurManagementModule { }
