import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './components/main-screen/main-screen.component'
import { CharacterListComponent } from './components/character-list/character-list.component'

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  {path: 'chars', component: CharacterListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
