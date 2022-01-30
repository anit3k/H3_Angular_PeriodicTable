import { Injectable } from '@angular/core';
import { IAtomModel } from '../models/atomModel';
import { IPeriodModel } from '../models/periodModel';

@Injectable({
  providedIn: 'root'
})

// this service is used to map the atom to each period, and sub periods
export class MapperService {

  // function to map atoms into periods, return an array of periods.
  mapAtoms(atoms: IAtomModel[]): IPeriodModel[] {

    let result: IPeriodModel[] = this.getResultModel();

    for (let atom of atoms) {
      switch (atom.period) {
        case 1:
          this.addAtomToPeriod(result, atom);
          this.checkIfSpanAtomIsNeeded(atom, result, 1, atom.period - 1);
          break;
        case 2:
          this.addAtomToPeriod(result, atom);
          this.checkIfSpanAtomIsNeeded(atom, result, 4, atom.period - 1);
          break;
        case 3:
          this.addAtomToPeriod(result, atom);
          this.checkIfSpanAtomIsNeeded(atom, result, 12, atom.period - 1);
          break;
        case 4:
          this.addAtomToPeriod(result, atom);
          break;
        case 5:
          this.addAtomToPeriod(result, atom);
          break;
        case 6:
          this.CheckIfSubgroupInformationAtomNeededToPeriod(atom, result, 57, 57.71); 
          if (atom.number > 56 && atom.number < 72) {
            this.createSubPeriod(result, atom, 8, 57.71);
          }
          else {
            this.addAtomToPeriod(result, atom);
          }
          break;
        case 7:
          this.CheckIfSubgroupInformationAtomNeededToPeriod(atom, result, 89, 89.103);
          if (atom.number > 88 && atom.number < 104) {
            this.createSubPeriod(result, atom, 9, 89.103);
          }
          else {
            this.addAtomToPeriod(result, atom);
          }
          break;
      }
    }

    // Create an empty atom that will be used to make space between main table and "sub" table
    result[7].atoms.push(this.createEmptyAtom());

    return result;
  }  

  

  // region: methods to add a empty atom, used for span in table view
  private checkIfSpanAtomIsNeeded(atom: IAtomModel, result: IPeriodModel[], atomNumber: number, periodArrNum: number) {
    if (atom.number == atomNumber) {
      // insert empty atom to do span in table
      this.createSpanAtom(result, periodArrNum);
    };
  }
  private createSpanAtom(result: IPeriodModel[], periodArrNum: number) {
    result[periodArrNum].atoms.push(this.createEmptyAtom());
  }
  private createEmptyAtom(): IAtomModel {
    return { name: "", symbol: "", period: NaN, xpos: NaN, ypos: NaN, category: "", number: NaN, };
  }
  // region end

  // region: create sub periods and information atoms needed
  private CheckIfSubgroupInformationAtomNeededToPeriod(atom: IAtomModel, result: IPeriodModel[], atomSubgroupNumber: Number, atomSubgroupRange: number) {
    if (atom.number == atomSubgroupNumber) {
      result[atom.period-1].atoms.push(this.createSubgroupInformationAtom(atom, atomSubgroupRange));
    }
  }
  private createSubgroupInformationAtom(atom: IAtomModel, range: number): IAtomModel {
    return { name: "Sub Group", symbol: "SUB", period: atom.period, xpos: atom.xpos, ypos: atom.ypos, category: atom.category, number: range };
  }

  private createSubPeriod(result: IPeriodModel[], atom: IAtomModel, periodSubNum: number, atomNumRange: number) {
    if (result[periodSubNum].atoms.length != 0) {
      result[periodSubNum].atoms.push(atom);
    }
    else { // populates the empty array with correct structure to make view correct
      result[periodSubNum].atoms.push(this.createEmptyAtom()); // insert empty atom to do span
      result[periodSubNum].atoms.push(this.createSubgroupInformationAtom(atom, atomNumRange)); // instert sub information in atom
      result[periodSubNum].atoms.push(atom); // insert the first atom in subgroup.
    }
  }  
  // region end

  private addAtomToPeriod(result: IPeriodModel[], atom: IAtomModel) {
    result[atom.period-1].atoms.push(atom);
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
