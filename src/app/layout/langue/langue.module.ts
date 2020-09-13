import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';


import { LangueRoutingModule } from './langue-routing.module';
import { LangueComponent } from './langue.component';
import { ManagelangueComponent } from './managelangue.component';


import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';

@NgModule({
  imports: [
    CommonModule,
    LangueRoutingModule,
    PageHeaderModule,AlertModule,
    ReactiveFormsModule,FormsModule
  ],
  declarations: [LangueComponent,ManagelangueComponent]
})
export class LangueModule { }
