import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ManageservicesComponent } from './manageservices.component';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    PageHeaderModule,AlertModule,
    ReactiveFormsModule,FormsModule
  ],
  declarations: [ServicesComponent,ManageservicesComponent]
})
export class ServicesModule { }
