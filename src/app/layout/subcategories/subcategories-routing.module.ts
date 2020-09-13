import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcategoriesComponent } from './subcategories.component';
import { ManagesubcategoriesComponent } from './managesubcategories.component';

const routes: Routes = [

	{
	    path: '',component: SubcategoriesComponent,children:  
		[
			{path: 'manage-subcategories', component: ManagesubcategoriesComponent}
		]
	} 

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesRoutingModule { }
