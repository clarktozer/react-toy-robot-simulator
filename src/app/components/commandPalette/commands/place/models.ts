import { Facing } from "../../../../enums";
import { ICoordinate } from "../../../../models";

export interface IPlace {
    disabled?: boolean;
    onPlace: (coordinates: ICoordinate, facing: Facing) => void;
    xMax: number;
    yMax: number;
}
