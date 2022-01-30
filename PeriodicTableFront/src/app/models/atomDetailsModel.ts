import { IAtomModel } from "./atomModel";

export class AtomDetailModel implements IAtomModel{
    // implemented from IAtomModel
    "name": string;
    "symbol": string;
    "period": number;
    "number": number;
    "xpos": number;
    "ypos": number;
    "category": string;

    // Added for ekstra details
    "appearance": string;
    "atomic_mass": number;
    "discovered_by": string;
    "shells": number[];
    "source": string;
    "summary": string;
}