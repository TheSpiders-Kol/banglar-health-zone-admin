import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageHospitalComponent } from './manage-hospital/manage-hospital.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { HealthServicesComponent } from './health-services/health-services.component';
import { InsuranceCompaniesComponent } from './insurance-companies/insurance-companies.component';
import { EditHealthServiceComponent } from './edit-health-service/edit-health-service.component';
import { EditInsuranceCompanyComponent } from './edit-insurance-company/edit-insurance-company.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { Snackbar } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ManageUserComponent,
    ManageHospitalComponent,
    AddHospitalComponent,
    EditHospitalComponent,
    HealthServicesComponent,
    InsuranceCompaniesComponent,
    EditHealthServiceComponent,
    EditInsuranceCompanyComponent,
    AddUserComponent,
    EditUserComponent,
    Snackbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
