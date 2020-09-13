import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';

import { CategorieserviceRoutingModule } from './categorieservice-routing.module';
import { CategorieserviceComponent } from './categorieservice.component';
import { ManagecategorieserviceComponent } from './managecategorieservice.component';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';

import { SharedPipesModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    CategorieserviceRoutingModule,
    PageHeaderModule,AlertModule,SharedPipesModule,
    ReactiveFormsModule,FormsModule
  ],
  declarations: [CategorieserviceComponent,ManagecategorieserviceComponent]
})
export class CategorieserviceModule { }
