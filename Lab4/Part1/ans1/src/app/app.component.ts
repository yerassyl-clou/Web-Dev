import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` Hello Universe `,
  styles: [
    `
      :host {
        color: #a144eb;
      }
    `,
  ],
})
export class AppComponent {}
