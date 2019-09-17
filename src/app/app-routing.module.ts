import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { TablePageComponent } from './table/table-page.component';
import { TableFilterComponent } from './table/table-filter.component';
import { TableTreeComponent } from './table/table-tree.component';
import { LightboxComponent } from './overlay/lightbox.component';
import { UserLoginComponent } from './user/user-login.component';
import { UserRegisterComponent } from './user/user-register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'others', component: AboutComponent },
  { path: 'table-page', component: TablePageComponent },
  { path: 'table-filter', component: TableFilterComponent },
  { path: 'table-tree', component: TableTreeComponent },
  { path: 'overlay-lightbox', component: LightboxComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
