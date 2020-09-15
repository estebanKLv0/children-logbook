import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogService } from './services/catalog.service';
import { DetailComponent } from './components/detail/detail.component';
import { CatalogFoundComponent } from './components/catalog-found/catalog-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    DetailComponent,
    CatalogFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
