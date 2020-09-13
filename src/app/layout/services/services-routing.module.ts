import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ManageservicesComponent } from './manageservices.component';

const routes: Routes = [

	{
	    path: '',component: ServicesComponent,children:  
		[
			{path: 'manage-services', component: ManageservicesComponent}
		]
	} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
