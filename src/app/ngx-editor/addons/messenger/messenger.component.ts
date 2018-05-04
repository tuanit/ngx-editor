import { Component } from '@angular/core';
import { MessengerService } from './services/messenger.service';

@Component({
  selector: 'ngxe-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})

export class MessengerComponent {

 /** property that holds the message to be displayed on the editor */
 ngxMessage = undefined;

 /**
  * @param _messageService service to send message to the editor
  */
 constructor(private _messageService: MessengerService) {
   this._messageService.getMessage().subscribe((message: string) => this.ngxMessage = message);
 }

 /**
  * clears editor message
  */
 clearMessage(): void {
   this.ngxMessage = undefined;
   return;
 }

}
