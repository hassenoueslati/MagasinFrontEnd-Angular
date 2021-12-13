import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockManagementRoutingModule } from './stock-management-routing.module';
import { StockManagementComponent } from './stock-management.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StockManagementComponent,
    StockComponent,
  ],
  imports: [
    CommonModule,
    StockManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class StockManagementModule { }
