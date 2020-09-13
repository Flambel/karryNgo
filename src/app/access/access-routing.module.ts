import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineConsultationComponent } from './online-consultation/online-consultation.component'
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationComponent } from './notification/notification.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ServiceSubcategoryComponent } from './service-subcategory/service-subcategory.component';
import { AskHelpComponent } from './ask-help/ask-help.component';
import { ServicesBankComponent } from './services-bank/services-bank.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { MyAcceptedServicesComponent } from './my-accepted-services/my-accepted-services.component';
import { MyAwardedServicesComponent } from './my-awarded-services/my-awarded-services.component';
import { MyCompletedServicesComponent } from './my-completed-services/my-completed-services.component';
import { AccessComponent } from './access.component';

const routes: Routes = [
    {
      path: '', component: AccessComponent,
      children: [
        { path: '', redirectTo: 'online-consultation', pathMatch: 'full' },
        {path: 'profile', component: ProfileComponent},
        {path: 'online-consultation', component: OnlineConsultationComponent},
        {path: 'pharmacy', component: PharmacyComponent},
        {path: 'messages', component: InboxComponent},
        {path: 'notifications', component: NotificationComponent},
        {path: 'service-categories', component: ServiceCategoryComponent},
        {path: 'ask-help', component: AskHelpComponent},
        {path: 'bank-of-services', component: ServicesBankComponent},
        {path: 'my-help-requests', component: MyServicesComponent},
        {path: 'service-details/:service_name/:service_id', component: ServiceDetailsComponent},
        {path: 'service-subcategories/:category_name/:category_id', component: ServiceSubcategoryComponent},
        {path: 'services-accepted-or-awarded/my-awarded-services', component: MyAwardedServicesComponent},
        {path: 'services-accepted-or-awarded/my-accepted-services', component: MyAcceptedServicesComponent},
        {path: 'services-completed-by-a-user/my-completed-services', component: MyCompletedServicesComponent}
      ]
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccessRoutingModule { }
