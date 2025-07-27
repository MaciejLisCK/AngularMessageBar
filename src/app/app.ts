import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageBar, MessageBarType } from "./message-bar/message-bar";
import { FormsModule } from '@angular/forms';

export enum MessageBarButtonsPosition {
  None,
  Right,
  Bottom,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageBar, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularMessageBar');
  
  messageType = MessageBarType.Information
  buttonsPosition = MessageBarButtonsPosition.None
  hasCloseButton = true
  
  MessageBarType = MessageBarType
  MessageBarButtonsPosition = MessageBarButtonsPosition
  console = console
}
