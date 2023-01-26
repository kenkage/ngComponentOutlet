import { OnInit } from '@angular/core';
import { Component,Injector } from '@angular/core';
import { token } from './app.component';

@Component({
  template: `<div>{{name}}!</div>`,
})
export class HelloComponent implements OnInit {
  public name = 'Hello Component is here';
  public dataIn: string;
  constructor(private inject: Injector) {
    console.log('HelloComponent generated');
  }

  ngOnInit() {
    this.dataIn = this.inject.get(token);
    console.log('imported data - Hello ', this.dataIn);
  }
}
