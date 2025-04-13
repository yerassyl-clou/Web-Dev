import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vacancy } from "./models";


@Injectable({
  providedIn: "root"
})

export class CompanyVacanciesService {

  constructor(private http: HttpClient) { }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`http://localhost:8000/api/companies/${companyId}/vacancies/`);
  }
}
