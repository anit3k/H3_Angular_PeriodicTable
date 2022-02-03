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

  "atomDetail": AtomDetailModel = {
    name: "fake",
    symbol: "fake",
    period: NaN,
    number: NaN,
    xpos: NaN,
    ypos: NaN,
    category: "none",
    appearance: "fake",
    atomic_mass: NaN,
    discovered_by: "fake man",
    shells: [NaN, NaN],
    source: "Not here",
    summary: "nothing to tell" 
  };
  
  @Input() atomNum: number = 1;
  sub!: Subscription;
  
  constructor(private api: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Method: onChanges child atom number: " + changes['atomNum'].currentValue)
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