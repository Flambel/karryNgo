import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
    {
      path: '', component: LandingComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {path: 'home', component: HomeComponent},
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: 'read-more-about-us', component: AboutUsComponent },
        { path: 'account-activation', component: AccountActivationComponent },
        { path: 'reset-forgotten-password', component: ForgotPasswordComponent },
        { path: 'recover-password/:code/:username/:id', component: RecoverPasswordComponent },
        { path: 'reset-your-password', component: ResetPasswordComponent },
      ]
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
