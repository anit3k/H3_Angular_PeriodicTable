import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IAtomModel } from '../models/atomModel';
import { AtomDetailModel } from '../models/atomDetailsModel';

@Injectable({
  providedIn: 'root'
})

// this class handels the http request
export class ApiService {

  // base url for the atom api
  baseUrl: string = "http://localhost:5000/api/AtomInfo/";

  constructor(private http: HttpClient) { }

  // this method calls the atom api to get a list of all atoms
  getAtoms(): Observable<IAtomModel[]> {
    return this.http.get<IAtomModel[]>(this.baseUrl);
  };

  // this method is used to get the details of a single atom
  getAtom(id: number) : Observable<AtomDetailModel> {
    return this.http.get<AtomDetailModel>(this.baseUrl+id);
  };
}
