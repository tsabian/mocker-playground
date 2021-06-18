import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMockRouteComponent } from './components/add-mock-route/add-mock-route.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { MockerRouteDetailComponent } from './components/mocker-route-detail/mocker-route-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: AddMockRouteComponent },
  { path: 'detail/:id', component: MockerRouteDetailComponent },
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
