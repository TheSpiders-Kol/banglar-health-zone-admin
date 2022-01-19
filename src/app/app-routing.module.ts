import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ManageUserComponent} from './manage-user/manage-user.component'

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'manageUsers', component: ManageUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
