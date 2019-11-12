import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule,routingcomponents} from './app-routing.module'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { PolicySearchComponent } from './components/policy-search/policy-search.component';
import{HttpService} from './Service/http.service'
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    routingcomponents,
    AppComponent,
    PolicySearchComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,HttpClientModule,FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
