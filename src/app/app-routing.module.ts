import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'dashboard',component:DashboardComponent},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule) },
{ path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) },
{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
{ path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},

{path:'**',component:ErrorPageComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
