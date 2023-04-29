import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarService } from './services/car.service';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { UberunsComponent } from './components/uberuns/uberuns.component';
import { AnmeldenComponent } from './components/anmelden/anmelden.component';
import { GrunderComponent } from './components/grunder/grunder.component';
import { MietenComponent } from './components/mieten/mieten.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'uberuns', component: UberunsComponent },
  { path: 'anmelden', component: AnmeldenComponent },
  { path: 'grunder', component: GrunderComponent },
  { path: 'mieten', component: MietenComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute)],
  declarations: [
    AppComponent,
    HomeComponent,
    CarCardComponent,
    FilterModalComponent,
    KontaktComponent,
    UberunsComponent,
    AnmeldenComponent,
    GrunderComponent,
    MietenComponent,
    DashboardComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CarService],
})
export class AppModule {}