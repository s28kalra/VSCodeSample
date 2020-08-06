import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)='counter()'>Click Here</button>
    <p>
      No oF clicks is <span id="clickNumber">{{click}}</span>
    </p>
  `,
  styles: ['#clickNumber{font-weight:bold; font-size:100px}'
  ]
})
export class CounterComponent implements OnInit {
  click:number;
  
  counter(){
    this.click=this.click+1;
  }
  
  constructor() { this.click=100; }

  ngOnInit(): void {
  }

}
