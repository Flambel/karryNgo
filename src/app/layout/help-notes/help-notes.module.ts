import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module'; 
import { HelpNotesComponent } from './help-notes.component';
import { HelpNotesRoutingModule } from './help-notes-routing.module';

@NgModule({
    imports: [CommonModule, HelpNotesRoutingModule,ReactiveFormsModule,FormsModule,PageHeaderModule,AlertModule],
    declarations: [HelpNotesComponent]
})
export class HelpNotesModule {}
