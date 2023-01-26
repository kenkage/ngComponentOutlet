import { OnInit } from '@angular/core';
import { Component,Injector } from '@angular/core';
import { token } from './app.component';

@Component({
  template: `<div>{{msg}}</div>`
})
export class ByeComponent implements OnInit {
  public msg = 'Bye Component is here!!!';
  public dataIn: string;
  constructor(private inject: Injector) {
    console.log('ByeComponent generated');
  }

  ngOnInit() {
    this.dataIn = this.inject.get(token);
  }
}