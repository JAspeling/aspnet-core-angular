import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorComponent, HomeComponent, AddVehicleComponent } from '../components';
import { AppComponent } from '../app/app.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vehicles/new', component: AddVehicleComponent},
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
