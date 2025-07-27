import { Component, computed, input, output } from '@angular/core';
import { MessageBarType } from './model/message-bar-type';
import { MessageBarButtons } from './model/message-bar-buttons';
import { MessageBarButtonsPosition } from './model/message-bar-buttons-position';

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
  buttons = input<MessageBarButtons>()
  hasCloseButton = input<boolean>(true)
  primaryButtonClicked = output<void>()
  secondaryButtonClicked = output<void>();
  closeClicked = output<void>()

  isInformationType = computed(() => this.type() === MessageBarType.Information)
  isSuccessType = computed(() => this.type() === MessageBarType.Success)
  isWarningType = computed(() => this.type() === MessageBarType.Warning)
  isErrorType = computed(() => this.type() === MessageBarType.Error)
  
  primaryButtonText = computed(() => this.buttons()?.buttons[0]?.text)
  secondaryButtonText = computed(() => this.buttons()?.buttons[1]?.text)
  buttonsPositionBottom = computed(() => this.buttons()?.position === MessageBarButtonsPosition.Bottom)

  MessageBarButtonsPosition = MessageBarButtonsPosition;
}
