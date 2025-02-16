import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
    <p>Yes, the server is running</p>
    } @else {
    <p>No, the server is not running</p>
    }
  `,
})
export class AppComponent {
  isServerRunning = true;
}
