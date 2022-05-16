import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoent/navbar/navbar.component';
import { DashboardComponent } from './compoent/dashboard/dashboard.component';
//import { ClientComponent } from './compoent/client/client.component';
import { ClientsComponent } from './compoent/clients/clients.component';
import { SidebarComponent } from './compoent/sidebar/sidebar.component';
import { AddClientComponent } from './compoent/add-client/add-client.component';
import { EditClientComponent } from './compoent/edit-client/edit-client.component';
import { ClientDetailsComponent } from './compoent/client-details/client-details.component';
import { LoginComponent } from './compoent/login/login.component';
import { RegisterComponent } from './compoent/register/register.component';
import { SettingsComponent } from './compoent/settings/settings.component';
import { NotFoundComponent } from './compoent/not-found/not-found.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
