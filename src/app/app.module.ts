import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material.module';
import { NewFormComponent, OrderMaterialsComponent, YesNoPipe } from './new-form/new-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { Models } from './models/models';
import { Tires } from './models/tires';
import { Transmission } from './models/transmission';
import { Order } from './models/order';
import { Paint } from './models/paint';
import { Engines } from './models/engines';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewFormComponent,
    OrderMaterialsComponent,
    HistoryComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [OrderMaterialsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
