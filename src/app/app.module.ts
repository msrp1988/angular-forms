import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicformsComponent } from './dynamicforms/dynamicforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DynamicformsComponent,
    ReactiveformsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
