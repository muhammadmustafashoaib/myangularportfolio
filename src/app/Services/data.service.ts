import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private apiUrl = 'https://sandbox11-api.Rica.com/Api'; 
    private apiUrl ='https://sandbox11-api.Rica.com/Api/Pitch/PitchGetHomeProposals?langId=1&countryId=179&currencyId=1&UserId=150315'
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
