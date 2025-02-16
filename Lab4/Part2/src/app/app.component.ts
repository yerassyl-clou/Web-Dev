import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <h1 style="font-family: Arial;">Welcome to My Products App</h1>
    <app-products></app-products>
  `,
})
export class AppComponent {}
