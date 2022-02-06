import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Subscription } from 'rxjs';
import { AtomDetailModel } from '../models/atomDetailsModel';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'atom-atom-detail',
  templateUrl: './atom-detail.component.html',
  styleUrls: ['./atom-detail.component.css']
})
export class AtomDetailComponent implements OnInit, OnDestroy, OnChanges{

  // empty model to be populated by the api get request
  "atomDetail": AtomDetailModel = {
    name: "",
    symbol: "",
    period: NaN,
    number: NaN,
    xpos: NaN,
    ypos: NaN,
    category: "",
    appearance: "",
    atomic_Mass: NaN,
    discovered_by: "",
    shells: [NaN, NaN],
    source: "",
    summary: "" 
  };
  
  // input from "mother" component, gets the atom number used en det http get request
  @Input() atomNum: number = 1;
  sub!: Subscription;
  
  constructor(private api: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateAtomDetail(changes['atomNum'].currentValue)    
  }
  
  updateAtomDetail(newAtomDetail: number): void {
    this.sub = this.api.getAtom(newAtomDetail).subscribe({
      next: (getAtomDetail: AtomDetailModel) =>
      this.atomDetail = getAtomDetail
    });    
  }
  
  ngOnInit(): void {
    this.sub = this.api.getAtom(this.atomNum).subscribe({
    next: (getAtomDetail: AtomDetailModel) =>
    this.atomDetail = getAtomDetail
  });    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }  
}