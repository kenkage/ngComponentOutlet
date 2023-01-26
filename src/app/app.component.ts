import { Component, Injector, InjectionToken } from '@angular/core';
import { HelloComponent } from './hello.component';
import { ByeComponent } from './bye.component';

export const token = new InjectionToken<string>('');

@Component({
  selector: 'my-app',
  template: `
    <button (click)="render()">Render dynamic component</button>
    <ng-container [ngComponentOutlet]="currentComponent"  
    [ngComponentOutletInjector]="myInjector"></ng-container>
  `
})

export class AppComponent  {
  public components = [HelloComponent, ByeComponent];
  public currentComponent = null;
  data = {
    widget: 'Outstanding Task'
  };
  public myInjector: Injector;

  constructor(private injector: Injector) {}

  public render(): void {
    const index = Math.round(Math.random());
    this.currentComponent = this.components[index];
    this.createInjector();
  }
  createInjector() {
    this.myInjector = Injector.create({
      providers: [{ provide: token, useValue: this.data }],
      parent: this.injector,
    });
  }
}
