import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  }    from '@angular/forms';
import { SubcategoriesRoutingModule } from './subcategories-routing.module';
import { SubcategoriesComponent } from './subcategories.component';
import { PageHeaderModule } from './../../shared';
import { AlertModule } from './../../_directives/alert.module';
import { ManagesubcategoriesComponent } from './managesubcategories.component';

@NgModule({
  imports: [
    CommonModule,
    SubcategoriesRoutingModule,
    PageHeaderModule,AlertModule,
    ReactiveFormsModule,FormsModule
  ],
  declarations: [SubcategoriesComponent, ManagesubcategoriesComponent]
})
export class SubcategoriesModule { }
