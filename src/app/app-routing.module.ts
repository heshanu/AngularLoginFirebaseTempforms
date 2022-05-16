import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compoent/dashboard/dashboard.component';
import { LoginComponent } from './compoent/login/login.component';
import { SettingsComponent } from './compoent/settings/settings.component';
import { RegisterComponent } from './compoent/register/register.component';
import { ClientDetailsComponent } from './compoent/client-details/client-details.component';
import { NotFoundComponent } from './compoent/not-found/not-found.component';
import { AddClientComponent } from './compoent/add-client/add-client.component';
import { EditClientComponent } from './compoent/edit-client/edit-client.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client/add', component:AddClientComponent },
  { path: 'client/edit/:id', component: EditClientComponent },
  { path: 'client/:id', component: ClientDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
