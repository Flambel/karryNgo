import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';
import { ListUserRoutingModule } from './list-users-routing.module';
import { ListUserComponent } from './list-users.component';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';
import { AddEmpComponent } from './add-users.component';  
import { ChangeRoleUserComponent } from './change-role-users.component';   

@NgModule({
    imports: [CommonModule, ListUserRoutingModule,ReactiveFormsModule,FormsModule,PageHeaderModule,AlertModule],
    declarations: [ListUserComponent,AddEmpComponent,ChangeRoleUserComponent]
})
export class ListUserModule {}
