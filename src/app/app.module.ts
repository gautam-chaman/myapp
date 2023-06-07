import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgworksComponent } from './ngworks/ngworks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmetrialComponent } from './angularmetrial/angularmetrial.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [

  {path:'',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'delet',component:DeleteComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    NgworksComponent,
    AngularmetrialComponent,
    HomeComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
