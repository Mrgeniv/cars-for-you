import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UberunsComponent } from '../uberuns.component';
import { RouterModule, Routes } from '@angular/router';
import { GrunderComponent } from '../../grunder/grunder.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



const uberunsRoute:Routes = [
  {path: '', component: UberunsComponent},
  {path:'/grunder ',component:GrunderComponent}


]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(uberunsRoute) ],
  declarations: [ UberunsComponent,GrunderComponent]

 
})

export class UberunsModule { }