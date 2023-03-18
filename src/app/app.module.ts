import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HighlightPipe } from './highlight.pipe';
import { UserloansComponent } from './userloans/userloans.component';
import { HomeComponent } from './home/home.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    UserloansComponent,
    HomeComponent,
    ProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
