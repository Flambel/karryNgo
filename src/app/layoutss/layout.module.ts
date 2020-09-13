import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgbDropdownModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
