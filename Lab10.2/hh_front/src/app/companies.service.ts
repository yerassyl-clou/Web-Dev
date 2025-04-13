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
    return this.http.get<Company[]>('127.0.0.1:8000/api/companies');
  }
}
