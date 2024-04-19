import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { ContainerComponent } from './container/container.component';
import { ProductFilterComponent } from './container/product-list/product-filter/product-filter.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SingleProductComponent } from './container/product-list/single-product/single-product.component';
import { ProductSearchComponent } from './container/product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ContainerComponent,
    ProductFilterComponent,
    ProductListComponent,
    SingleProductComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
