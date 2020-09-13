import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { ManagerolesComponent } from './manageroles.component';

const routes: Routes = [

	{
	    path: '',component: RoleComponent,children:  
		[
			{path: 'manage-roles', component: ManagerolesComponent}
		]
	} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
