import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { AccessRoutingModule } from './access-routing.module';
import { OnlineConsultationComponent } from './online-consultation/online-consultation.component';
import { ComponentsModule } from '../_components/components.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { AskHelpComponent } from './ask-help/ask-help.component';
import { ServicesBankComponent } from './services-bank/services-bank.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ServiceSubcategoryComponent } from './service-subcategory/service-subcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MyServicesComponent } from './my-services/my-services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { MyAcceptedServicesComponent } from './my-accepted-services/my-accepted-services.component';
import { MyAwardedServicesComponent } from './my-awarded-services/my-awarded-services.component';
import { MyCompletedServicesComponent } from './my-completed-services/my-completed-services.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [AccessComponent, OnlineConsultationComponent, PharmacyComponent, ProfileComponent, InboxComponent, NotificationComponent, AskHelpComponent, ServicesBankComponent, ServiceCategoryComponent, ServiceSubcategoryComponent, MyServicesComponent, ServiceDetailsComponent, MyAcceptedServicesComponent, MyAwardedServicesComponent, MyCompletedServicesComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    NgxPaginationModule
  ]
})
export class AccessModule { }
