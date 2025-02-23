import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../data';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products!: Product[];
}
