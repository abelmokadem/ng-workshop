import { Component } from '@angular/core';
import { LogItem } from "./components/log-list/log-item.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logItems: LogItem[] = [{
    description: 'Log item 1',
    timestamp: 1000
  }, {
    description: 'Log item 2',
    timestamp: 2000
  }];
}
