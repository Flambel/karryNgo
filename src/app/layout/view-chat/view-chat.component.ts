import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HelpnoteService } from 'src/app/_services/helpnote.service';

import { first } from 'rxjs/operators';

import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.scss'],
  animations: [routerTransition()]
})
export class ViewChatComponent implements OnInit {

  messages: any;
  displayId: string ="";

  constructor( private helpnoteService: HelpnoteService,
                public route: ActivatedRoute,
                private router: Router,) { }

  ngOnInit() {
    this.getAllChats();
  }

  getAllChats(){
    this.helpnoteService.getAllChats().pipe(first()).subscribe((notes: any) => {
        this.messages = notes.data;
        console.log(this.messages);
        console.log(notes.message);
        console.log(this.messages[0]._id);
    });
  }

  afficherMessage(a: string){
    this.displayId = a;
  }

}
