import { Component, OnInit } from '@angular/core';
import { AtomDetailModel } from '../models/AtomDetailsModel';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'atom-atom-detail',
  templateUrl: './atom-detail.component.html',
  styleUrls: ['./atom-detail.component.css']
})
export class AtomDetailComponent implements OnInit {

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

  }

  // @input atomNum: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAtom(1).subscribe({
      next: (getAtomDetail: AtomDetailModel) =>
      this.atomDetail = getAtomDetail
    });
  }

}
