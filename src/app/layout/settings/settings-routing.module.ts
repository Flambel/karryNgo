import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ManagesettingsComponent } from './managesettings.component';
import { ViewsettingsComponent } from './viewsettings.component';

const routes: Routes = [
	
	{
	    path: '',component: SettingsComponent,children:  
		[
			{path: 'manage-settings', component: ManagesettingsComponent}, 
			{path: 'viewDetails/:id', component: ViewsettingsComponent} 
		]
	} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
