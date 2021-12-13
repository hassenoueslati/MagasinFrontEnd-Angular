import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationManagementRoutingModule } from './reclamation-management-routing.module';
import { ReclamationManagementComponent } from './reclamation-management.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ReclamationManagementComponent,
    ReclamationComponent,
  ],
  imports: [
    CommonModule,
    ReclamationManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ReclamationManagementModule { }
