import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RayonManagementRoutingModule } from './rayon-management-routing.module';
import { RayonManagementComponent } from './rayon-management.component';
import {RayonComponent} from "./rayon/rayon.component";
import {MainRayonComponent} from "./main-rayon/main-rayon.component";
import {RayonFormAddComponent} from "./rayon-form-add/rayon-form-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    RayonManagementComponent,
    RayonComponent,
    MainRayonComponent,
    RayonFormAddComponent
  ],
  imports: [
    CommonModule,
    RayonManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class RayonManagementModule { }
