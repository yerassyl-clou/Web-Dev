import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { Product } from "../data";
import { ProductItemComponent } from "../product-item/product-item.component";
import { PRODUCTS } from "../data";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [NgFor, NgIf, ProductItemComponent],
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  @Input() products!: Product[];
}
