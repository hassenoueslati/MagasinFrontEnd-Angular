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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
})
export class AppModule { }
