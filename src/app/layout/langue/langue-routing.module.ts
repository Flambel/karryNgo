import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangueComponent } from './langue.component';
import { ManagelangueComponent } from './managelangue.component';

const routes: Routes = [

	{
	    path: '',component: LangueComponent,children:  
		[
			{path: 'manage-languages', component: ManagelangueComponent}
		]
	} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LangueRoutingModule { }
