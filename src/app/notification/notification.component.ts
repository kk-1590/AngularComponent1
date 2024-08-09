import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template : `<div [hidden]="displayNotification" class="alert alert-danger"><p>This website uses cookies</p>
              <button class="btn" (click)="handleClick()">Close</button>
              </div>`,
  styles : ["div{margin:100px;}","p{font-size:20px;font-weight:bold;}"]
})
export class NotificationComponent {
    displayNotification:boolean = false;

    handleClick(){
      this.displayNotification = true;
    }
}
