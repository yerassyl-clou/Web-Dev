import { Component } from '@angular/core';
import {Company} from "../models";
import {OnInit} from "@angular/core";
import {NgForOf} from "@angular/common";
import {CompaniesService} from "../companies.service";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterModule } from "@angular/router";


@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    NgForOf, CommonModule, RouterOutlet, RouterModule,
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  loaded: boolean = false;

  constructor(private companiesService: CompaniesService) {}


  ngOnInit() {
    this.getCompanies()
    console.log("Companies loaded")
  }

  // getCompanies() {
  //   this.companiesService.getCompanies().subscribe((companies) => {
  //     this.companies = companies;
  //     this.loaded = true;
  //   })
  // }

  getCompanies() {
    console.log("Fetching companies...");
    this.companiesService.getCompanies().subscribe((companies) => {
      console.log("Companies fetched:", companies);
      this.companies = companies;
      this.loaded = true;
    }, error => {
      console.error("Error fetching companies:", error);
    });
  }
}
