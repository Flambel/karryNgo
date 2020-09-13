import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {   

        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'list-users', loadChildren: () => import('./list-users/list-users.module').then(m => m.ListUserModule) },
            { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
            { path: 'categories-services', loadChildren: () => import('./categorieservice/categorieservice.module').then(m => m.CategorieserviceModule) },
            { path: 'subcategories', loadChildren: () => import('./subcategories/subcategories.module').then(m => m.SubcategoriesModule) },
            { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
            { path: 'languages', loadChildren: () => import('./langue/langue.module').then(m => m.LangueModule) },
            { path: 'viewchat', loadChildren: () => import('./view-chat/view-chat.module').then(m => m.ViewChatModule) },
            { path: 'roles', loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
            { path: 'chat', loadChildren: () => import('./help-notes/help-notes.module').then(m => m.HelpNotesModule) },
            { path: 'about', component: AboutComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
