import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDescriptionComponent } from "../product-description/product-description.component";

const routes: Routes = [
  { path: "description/:id", component: ProductDescriptionComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
