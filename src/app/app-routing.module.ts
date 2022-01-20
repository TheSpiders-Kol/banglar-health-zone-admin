import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ManageUserComponent} from './manage-user/manage-user.component'
import { ManageHospitalsComponent } from './manage-hospitals/manage-hospitals.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'manageUsers', component: ManageUserComponent},
  { path: 'manageHospitals', component: ManageHospitalsComponent},
  { path: 'addHospital', component: AddHospitalComponent},
  { path: 'updateHospital', component: UpdateHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
