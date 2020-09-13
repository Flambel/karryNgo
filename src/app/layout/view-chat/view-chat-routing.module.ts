import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChatComponent } from './view-chat.component';

const routes: Routes = [
    {
        path: '', component: ViewChatComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewChatRoutingModule {
}
