import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageHospitalComponent } from './manage-hospital/manage-hospital.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'manageUser', component: ManageUserComponent},
  { path: 'manageHospital', component: ManageHospitalComponent},
  { path: 'addHospital', component: AddHospitalComponent},
  { path: 'updateHospital', component: UpdateHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
