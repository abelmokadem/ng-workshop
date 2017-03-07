import { Component, Input } from '@angular/core';
import { LogItem } from './log-item.interface';

@Component({
  selector: `ws-log-list`,
  styles: [`
        .log-list_header,
        .log-list_item {
            display: flex;
        }
        
        .log-list_header {
            font-weight: bold;
        }
        
        .log-list_description {
            flex-grow: 1;
        }
        
        .log-list_timestamp {
            width: 200px;
        }
        
        .log-list_item:nth-child(odd) {
            background: #dadada;
        } 
    `],
  template: `
        <div class="log-list">
            <div class="log-list_header">
                <div class="log-list_description">Description</div>
                <div class="log-list_timestamp">Timestamp</div>
            </div>
            <div class="log-list_item" *ngFor="let logItem of logItems">
                <div class="log-list_description">{{logItem.description}}</div> 
                <div class="log-list_timestamp">{{logItem.timestamp}}</div> 
            </div>
        </div>
    `
})
export class LogListComponent {

  @Input() logItems: LogItem[];
}
