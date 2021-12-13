import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import {MainUserComponent} from "./main-user/main-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {LoginComponent} from "./login/login.component";
import {RegisterUserComponent} from "./register/register-user.component";
import {ProfilComponent} from "./profil/profil.component";

const routes: Routes = [{ path: '', component: UserManagementComponent },
  {path: 'user', component: MainUserComponent , children:[
      {path:'category/:category',component:ListUserComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'register',component: RegisterUserComponent },
  {path: 'profil',component: ProfilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
