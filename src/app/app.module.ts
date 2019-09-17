import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TreeTableModule } from 'primeng/treetable';
import { LightboxModule } from 'primeng/lightbox';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { TablePageComponent } from './table/table-page.component';
import { TableFilterComponent } from './table/table-filter.component';
import { TableTreeComponent } from './table/table-tree.component';
import { LightboxComponent } from './overlay/lightbox.component';
import { RatingModule } from 'primeng/rating';
import { UserLoginComponent } from './user/user-login.component';
import { UserRegisterComponent } from './user/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TablePageComponent,
    TableFilterComponent,
    TableTreeComponent,
    LightboxComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    TableModule,
    DropdownModule,
    TreeTableModule,
    LightboxModule,
    DialogModule,
    RatingModule,
    AccordionModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
