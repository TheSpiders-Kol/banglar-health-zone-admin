import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ManageUserComponent,
    ManageHospitalsComponent,
    AddHospitalComponent,
    UpdateHospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
