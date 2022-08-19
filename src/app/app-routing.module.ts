import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'manageUser', component: ManageUserComponent},
  { path: 'manageHospital', component: ManageHospitalComponent},
  { path: 'addHospital', component: AddHospitalComponent},
  { path: 'editHospital', component: EditHospitalComponent},
  { path: 'healthServices', component: HealthServicesComponent},
  { path: 'insuranceCompanies', component: InsuranceCompaniesComponent},
  { path: 'editHealthService', component: EditHealthServiceComponent},
  { path: 'editInsuranceCompany', component: EditInsuranceCompanyComponent},
  { path: 'editUser', component: EditUserComponent},
  { path: 'privacyPolicy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
