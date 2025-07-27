import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageBar, MessageBarType } from "./message-bar/message-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularMessageBar');
  MessageBarType = MessageBarType;
}
