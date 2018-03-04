import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // { path: 'chat', component: MessageComponent, pathMatch: 'full'},
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'signup', component: SignupComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
