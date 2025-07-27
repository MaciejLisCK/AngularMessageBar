import { Component, computed, HostBinding, input, output } from '@angular/core';

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
  }
})
export class MessageBar {
  type = input<MessageBarType>()
  hasCloseButton = input<boolean>(true)
  closeClicked = output<void>()

  isInformationType = computed(() => this.type() === MessageBarType.Information)
  isSuccessType = computed(() => this.type() === MessageBarType.Success)
  isWarningType = computed(() => this.type() === MessageBarType.Warning)
  isErrorType = computed(() => this.type() === MessageBarType.Error)
}
