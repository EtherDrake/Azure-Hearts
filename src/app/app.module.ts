import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {MatInputModule,MatPaginatorModule, 
    MatTableModule, MatSortModule, 
    MatProgressSpinnerModule} from '@angular/material';

import { InMemoryDataService }  from './services/in-memory-data.service';
import { CharacterListComponent } from './components/character-list/character-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
