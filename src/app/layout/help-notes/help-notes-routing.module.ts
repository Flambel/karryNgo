import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpNotesComponent } from './help-notes.component';

const routes: Routes = [
    {
        path: '',component: HelpNotesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpNotesRoutingModule {}
