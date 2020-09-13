import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { ComponentsModule } from './../_components/components.module';
import { LoginComponent } from './login/login.component'
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

@NgModule({
  declarations: [RegisterComponent, LandingComponent, HomeComponent, AccountActivationComponent, LoginComponent, AboutUsComponent, ResetPasswordComponent, ForgotPasswordComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule,
    ComponentsModule
  ]
})
export class LandingModule { }
