import { IAtomModel } from "./atomModel";

//this interface represent a period in the periodic table
export interface IPeriodModel{

    period: number;
    atoms: IAtomModel[];
}