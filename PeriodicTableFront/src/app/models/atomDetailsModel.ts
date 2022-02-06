import { IAtomModel } from "./atomModel";

// this model is used for the detailed view of a atom
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
    "atomic_Mass": number;
    "discovered_by": string;
    "shells": number[];
    "source": string;
    "summary": string;
}