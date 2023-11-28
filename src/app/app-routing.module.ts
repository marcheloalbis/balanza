import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanzaFormComponent } from './balanza-form/balanza-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'balanza', component: BalanzaFormComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
