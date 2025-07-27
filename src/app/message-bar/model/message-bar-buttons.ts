import { MessageBarButton } from './message-bar-button';
import { MessageBarButtonsPosition } from './message-bar-buttons-position';

export interface MessageBarButtons {
  position: MessageBarButtonsPosition;
  buttons: MessageBarButton[];
}
