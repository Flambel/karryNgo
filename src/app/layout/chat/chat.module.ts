import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../../shared';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
    imports: [CommonModule, ChatRoutingModule, PageHeaderModule],
    declarations: [ChatComponent]
})
export class ChatModule {}
