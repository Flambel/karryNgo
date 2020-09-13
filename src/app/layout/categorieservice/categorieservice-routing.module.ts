import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieserviceComponent } from './categorieservice.component';
import { ManagecategorieserviceComponent } from './managecategorieservice.component';

const routes: Routes = [

	{
	    path: '',component: CategorieserviceComponent,children:  
		[
			{path: 'manage-cat-services', component: ManagecategorieserviceComponent}
		]
	} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieserviceRoutingModule { }
