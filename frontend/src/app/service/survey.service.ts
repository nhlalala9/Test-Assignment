import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8082/api/surveys';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getSurveys(): Observable<any> {
    return this.http.get(API_URL+'template/', { responseType: 'json' });
  }

  getByTitle(title:any): Observable<any> {
    return this.http.get(API_URL+'template/'+title, { responseType: 'json' });
  }

  saveSurvey(surveys:any): Observable<any> {
    console.log(surveys, 'on save');
    return this.http.post(API_URL, surveys);
  }
}
