import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppFilterComponent } from './app-filter/app-filter.component';
import { AppItemListComponent } from './app-item-list/app-item-list.component';
import { regionList, regionListToken } from './providers';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { AppMoreDetailComponent } from './app-more-detail/app-more-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSearchComponent,
    AppFilterComponent,
    AppItemListComponent,
    AppLoaderComponent,
    AppMoreDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:regionListToken,useValue:regionList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
