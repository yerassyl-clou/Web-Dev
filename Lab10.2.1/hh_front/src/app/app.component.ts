import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, CompaniesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';

  ngOnInit() {
    console.log('AppComponent initialized');
  }
}
