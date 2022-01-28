import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAtomModel } from '../models/atomModel';
import { IPeriodModel } from '../models/periodModel';
import { ApiService } from '../services/api.service';
import { MapperService } from '../services/mapper.service';

@Component({
  selector: 'atom-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css'],
})
export class PeriodicTableComponent implements OnInit, OnDestroy {

  periods: IPeriodModel[] = [];
  sub!: Subscription;

  constructor(private api: ApiService, private mapper: MapperService) { }
  
  ngOnInit(): void {
    this.sub = this.api.getAtoms().subscribe( {
      next: (getAtom: IAtomModel[]) => 
        this.periods = this.mapper.mapAtoms(getAtom)   
    });    
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}

