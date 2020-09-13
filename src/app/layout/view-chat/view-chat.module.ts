import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from 'src/app/shared';

import { ViewChatRoutingModule } from './view-chat-routing.module';
import { ViewChatComponent } from './view-chat.component';


@NgModule({
  declarations: [ViewChatComponent],
  imports: [
    CommonModule, 
    ViewChatRoutingModule, 
    PageHeaderModule
  ]
})
export class ViewChatModule { }
