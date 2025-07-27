import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageBar } from "./message-bar/message-bar";
import { MessageBarType } from './message-bar/model/message-bar-type';
import { FormsModule } from '@angular/forms';
import { MessageBarButtonsPosition } from './message-bar/model/message-bar-buttons-position';
import { MessageBarButtons } from './message-bar/model/message-bar-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageBar, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularMessageBar');
  
  messageType = MessageBarType.Information
  hasButtons = signal(false)
  buttonsPosition = signal(MessageBarButtonsPosition.Right)
  hasCloseButton = true
  primaryButtonText = signal('Primary')
  secondaryButtonText = signal('Secondary')

  buttons = computed<MessageBarButtons | undefined>(() => this.hasButtons() ? ({
    position: this.buttonsPosition(),
    buttons: [
      { text: this.primaryButtonText() },
      { text: this.secondaryButtonText() },
    ]
  }) : undefined)

  MessageBarType = MessageBarType
  MessageBarButtonsPosition = MessageBarButtonsPosition
  console = console
}
