import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      {{title}}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';

  constructor() {
    console.log('In constructor');
    this.changeTitle('Ng girl Angular App');
    console.log(this.title);
  }

  ngOnInit(): void {
  }

  changeTitle = (newTitle: string): void => {this.title = newTitle; };

}
