import { Component, computed, input, output } from '@angular/core';
import { MessageBarButtonsPosition } from '../app';

export enum MessageBarType {
  Information,
  Success,
  Warning,
  Error,
}

@Component({
  selector: 'app-message-bar',
  imports: [],
  templateUrl: './message-bar.html',
  styleUrl: './message-bar.scss',
  host: {
    '[class.information]': 'isInformationType()',
    '[class.success]': 'isSuccessType()',
    '[class.warning]': 'isWarningType()',
    '[class.error]': 'isErrorType()',
    '[class.has-close-button]': 'hasCloseButton()',
  }
})
export class MessageBar {
  type = input<MessageBarType>()
  buttonsPosition = input<MessageBarButtonsPosition>(MessageBarButtonsPosition.None)
  hasCloseButton = input<boolean>(true)
  primaryButtonClicked = output<void>()
  secondaryButtonClicked = output<void>();
  closeClicked = output<void>()

  isInformationType = computed(() => this.type() === MessageBarType.Information)
  isSuccessType = computed(() => this.type() === MessageBarType.Success)
  isWarningType = computed(() => this.type() === MessageBarType.Warning)
  isErrorType = computed(() => this.type() === MessageBarType.Error)
  
  MessageBarButtonsPosition = MessageBarButtonsPosition;
}
