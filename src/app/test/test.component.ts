import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template: `<div>
  inline template
 </div>`,
  styles: [`
    div {
      color: blue;
    }
    `]
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}