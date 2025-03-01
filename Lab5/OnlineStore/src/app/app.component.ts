import { Component } from "@angular/core";
import { CATEGORIES, PRODUCTS, Category, Product } from "./data";
import { ProductListComponent } from "./product-list/product-list.component";
import { NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgFor, ProductListComponent, RouterModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  categories = CATEGORIES;
  products = PRODUCTS;
  selectedCategory: number | null = null;

  filterProducts(categoryId: number | null) {
    this.selectedCategory = categoryId;
  }

  get filteredProducts(): Product[] {
    return this.selectedCategory
      ? this.products.filter((p) => p.categoryId === this.selectedCategory)
      : this.products;
  }
}
