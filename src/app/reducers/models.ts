import { Facing } from "../enums";
import { ICoordinate } from "../models";

export interface IRobotState {
    coordinates: ICoordinate;
    facing: Facing;
    isPlaced?: boolean;
    isMoveable?: boolean;
}

export interface IApplicationState {
    robot: IRobotState;
}
