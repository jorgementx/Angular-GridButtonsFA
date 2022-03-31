import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <button class="button" [ngStyle]="{'color': selected ? '#4CAF50' : '#bbb'}" (click)="toggleSelect()">
    <i [class]="icon"></i>
  </button>
  `,
  styles: [`
    .button {
      border: none;
      border-radius: 12px;
      height:100px;
      width:100px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      font-size: 48px;
      cursor: pointer;
      margin: 10px;
    }
  `]
})
export class EventThumbnailComponent {
  @Input() icon:any
  selected:boolean = false;

  toggleSelect(){
    this.selected=!this.selected;
  }
} 