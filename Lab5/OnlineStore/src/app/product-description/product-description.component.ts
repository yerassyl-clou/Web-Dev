import { Component, Input } from "@angular/core";
import { Product } from "../data";
import { ActivatedRoute } from "@angular/router";
import { PRODUCTS } from "../data";

@Component({
  selector: "app-product-description",
  standalone: true,
  imports: [],
  templateUrl: "./product-description.component.html",
  styleUrl: "./product-description.component.css",
})
export class ProductDescriptionComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get("id"));
    this.product = PRODUCTS.find((p) => p.id === productId);
  }
}
