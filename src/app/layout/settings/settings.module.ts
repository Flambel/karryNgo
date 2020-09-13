import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';
import { ManagesettingsComponent } from './managesettings.component';
import { ViewsettingsComponent } from './viewsettings.component';
import { NgKnifeModule } from 'ng-knife';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PageHeaderModule,
    AlertModule,
    NgKnifeModule
  ],
  declarations: [SettingsComponent, ManagesettingsComponent,ViewsettingsComponent]
})
export class SettingsModule { }
