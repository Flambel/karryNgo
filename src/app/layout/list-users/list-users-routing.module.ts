import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-users.component';
import { AddEmpComponent } from './add-users.component';  
import { ChangeRoleUserComponent } from './change-role-users.component';  

const routes: Routes = [
    {
        path: '',component: ListUserComponent ,
               children:  [{path: 'add-edit', component: AddEmpComponent},{path: 'role-edit', component: ChangeRoleUserComponent} ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListUserRoutingModule {}
