import { Observable } from 'rxjs';
import { Company} from "./models";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost:8000/api/companies/');
  }

  getCompanyDetail(id: number): Observable<Company> {
    return this.http.get<Company>(`http://localhost:8000/api/companies/${id}`);
  }
}
