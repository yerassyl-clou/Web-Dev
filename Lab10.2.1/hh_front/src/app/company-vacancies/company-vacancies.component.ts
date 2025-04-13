import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CompanyVacanciesService} from "../companies-vacancies.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgForOf} from "@angular/common";
import { Vacancy } from "../models";


@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [
    CommonModule, NgForOf, RouterModule
  ],
  templateUrl: './company-vacancies.component.html',
  styleUrl: './company-vacancies.component.css'
})

export class CompanyVacanciesComponent implements OnInit {
  companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private vacancyService: CompanyVacanciesService
  ) {}

  ngOnInit() {
    this.companyId = +this.route.snapshot.paramMap.get('id')!;
    this.loadVacancies()
  }

  loadVacancies() {
    this.vacancyService.getVacancies(this.companyId).subscribe({
      next: (vacancies) => {
        this.vacancies = vacancies;
      }, error: err => {
        console.log('Loading vacancies err: ', err);
      }
    })
  }
}
