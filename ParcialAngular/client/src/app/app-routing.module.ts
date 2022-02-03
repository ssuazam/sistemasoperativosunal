import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './coponents/home/home.component';
import { TangramComponent } from './coponents/tangram/tangram.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 

  },
  {
    path:'tangram',
    component:TangramComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
