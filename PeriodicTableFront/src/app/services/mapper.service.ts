import { Injectable } from '@angular/core';
import { IAtomModel } from '../models/atomModel';
import { IPeriodModel } from '../models/periodModel';

@Injectable({
  providedIn: 'root'
})

// this service is used to map the atom to each period
export class MapperService {  
  
  // function to map atoms into periods, return an array of periods.
  mapAtoms(atoms: IAtomModel[]): IPeriodModel[] {
    
    let result: IPeriodModel[] = this.getResultModel();

    for(let atom of atoms){
      switch(atom.period) {
        case 1:          
          result[0].atoms.push(atom)
          break;
          case 2:          
          result[1].atoms.push(atom)
          break;
          case 3:          
          result[2].atoms.push(atom)
          break;
          case 4:          
          result[3].atoms.push(atom)
          break;
          case 5:          
          result[4].atoms.push(atom)
          break;
          case 6:
            if (atom.number < 57 || atom.number > 71) {
              result[5].atoms.push(atom)
            }
            else {
              result[8].atoms.push(atom)
            }
          break;
          case 7: 
            if (atom.number < 89 || atom.number > 103){
              result[6].atoms.push(atom)            
            }
            else {
              result[9].atoms.push(atom)
            }
          break;
      }
    }
    return result;
  }

  //makes a the result template
  private getResultModel() {
    let period1: IAtomModel[] = [];
    let period2: IAtomModel[] = [];
    let period3: IAtomModel[] = [];
    let period4: IAtomModel[] = [];
    let period5: IAtomModel[] = [];
    let period6: IAtomModel[] = [];
    let period7: IAtomModel[] = [];
    let period8: IAtomModel[] = [];
    let period9: IAtomModel[] = [];
    let period10: IAtomModel[] = [];

    let result: IPeriodModel[] = [
      { period: 1, atoms: period1 },
      { period: 2, atoms: period2 },
      { period: 3, atoms: period3 },
      { period: 4, atoms: period4 },
      { period: 5, atoms: period5 },
      { period: 6, atoms: period6 },
      { period: 7, atoms: period7 },
      { period: 8, atoms: period8 },
      { period: 9, atoms: period9 },
      { period: 10, atoms: period10 }

    ];
    return result;
  }
}
