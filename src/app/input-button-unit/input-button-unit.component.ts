import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{title}}
    </p>
    <input [value]="title"
           (keyup.enter)="changeTitle($event)">
    <button (click)="changeButtonTitle()">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeTitle(event: any): void {
    console.log(event);
    this.title = event.target.value;
  }

  changeButtonTitle(): void {
    this.title = 'Button clicked';
  }

}
