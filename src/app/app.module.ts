import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { Item2Component } from './item2/item2.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'item/:id', component: Item2Component }
 ];
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    Item2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
