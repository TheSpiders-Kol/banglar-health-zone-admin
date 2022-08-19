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
import { EditUserComponent } from './edit-user/edit-user.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { Snackbar } from './snackbar/snackbar.component';
import { HomeComponent } from './home/home.component';
import { TokenRefreshService } from './services/token-refresh.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

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
    EditUserComponent,
    PrivacyPolicyComponent,
    Snackbar,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ],
  providers: [TokenRefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
