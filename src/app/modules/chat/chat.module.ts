import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
