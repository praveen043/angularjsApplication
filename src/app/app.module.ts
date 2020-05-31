import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { OneComponent } from './one/one.component';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [

  {
    path:'store', component:OneComponent
    
  
  },
  {
    path:'profile',component:MyprofileComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    HeaderComponent,
    FooterComponent,
    MyprofileComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatIconModule,MatSidenavModule,MatListModule,
    MatToolbarModule,MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
