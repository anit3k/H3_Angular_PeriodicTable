import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
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

  atomDetailNum: number = 1;
  
  constructor(private api: ApiService, private mapper: MapperService) { }

  
  ngOnInit(): void {
    this.sub = this.api.getAtoms().subscribe( {
      next: (getAtoms: IAtomModel[]) => 
      this.periods = this.mapper.mapAtoms(getAtoms)
    });    
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  } 

  mouseenterFunction(id: number){
    this.atomDetailNum = id;    
  }
}

