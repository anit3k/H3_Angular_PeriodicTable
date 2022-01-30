import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IAtomModel } from '../models/atomModel';
import { IPeriodModel } from '../models/periodModel';

@Injectable({
  providedIn: 'root'
})

// this class handels the http request
export class ApiService {

  baseUrl: string = "http://localhost:5000/api/AtomInfo";

  constructor(private http: HttpClient) { }

  getAtoms(): Observable<IAtomModel[]> {
    return this.http.get<IAtomModel[]>(this.baseUrl);
  }
}
