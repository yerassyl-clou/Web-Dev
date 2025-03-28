import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../data";
import { ViewEncapsulation } from "@angular/core";
import { OutletContext } from "@angular/router";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() remove = new EventEmitter<number>();

  ngOnInit() {
    console.log("Product received:", this.product);
  }

  likeProduct() {
    if (this.product) {
      this.product.likes++;
      console.log("Liked product:", this.product);
    } else {
      console.error("Product is undefined in ProductItemComponent");
    }
  }

  openDescription() {
    window.location.href = `/description/${this.product.id}`;
  }

  shareOnWhatsApp(product: Product): void {
    window.open(
      `https://wa.me/?text=Check out this product: ${product.link}`,
      "_blank"
    );
  }

  shareOnTelegram(product: Product): void {
    window.open(
      `https://t.me/share/url?url=${product.link}&text=Check out this product!`,
      "_blank"
    );
  }
}
