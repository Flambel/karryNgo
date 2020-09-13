import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './_services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './_components/components.module';
// import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    // JwPaginationModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    // JwPaginationModule
    // TranslateModule.forRoot()
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
