import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { ManagerolesComponent } from './manageroles.component';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    PageHeaderModule,AlertModule,
    ReactiveFormsModule,FormsModule
  ],
  declarations: [RoleComponent,ManagerolesComponent]
})
export class RoleModule { }
