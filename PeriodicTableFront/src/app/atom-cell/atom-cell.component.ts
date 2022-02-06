import { Component, OnInit, Input } from '@angular/core';
import { IAtomModel } from '../models/atomModel';

@Component({
  selector: 'atom-atom-cell',
  templateUrl: './atom-cell.component.html',
  styleUrls: ['./atom-cell.component.css']
})
export class AtomCellComponent{
  
  // empty model to be populated by the api get request
  @Input() model: IAtomModel = {
    name: '',
    symbol: '',
    period: 0,
    number: 0,
    xpos: 0,
    ypos: 0,
    category: ''
  }; 
  
  constructor() { }
}
