import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {   

        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
            // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            // { path: 'list-users', loadChildren: './list-users/list-users.module#ListUserModule' },
            // { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            // { path: 'categories-services', loadChildren: './categorieservice/categorieservice.module#CategorieserviceModule' },
            // { path: 'subcategories', loadChildren: './subcategories/subcategories.module#SubcategoriesModule' },
            // { path: 'services', loadChildren: './services/services.module#ServicesModule' },
            // { path: 'languages', loadChildren: './langue/langue.module#LangueModule' },
            // { path: 'viewchat', loadChildren: './view-chat/view-chat.module#ViewChatModule' },
            // { path: 'roles', loadChildren: './role/role.module#RoleModule' },
            // { path: 'chat', loadChildren: './help-notes/help-notes.module#HelpNotesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}