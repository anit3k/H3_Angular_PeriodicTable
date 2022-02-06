import { Component, OnDestroy, OnInit} from '@angular/core';
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

  // this method is used to get the atom number to view the details of the specific atom
  mouseenterFunction(id: number){
    this.atomDetailNum = id;    
  }
}

