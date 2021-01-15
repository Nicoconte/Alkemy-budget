import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component' 

const routes: Routes = [
  { path: '', component : LoginComponent },
  { path: 'sign-in', component : LoginComponent },
  { path: 'sign-up', component : RegisterComponent },
  { path: 'home', component : HomeComponent },
  { path: '**', component :  ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
