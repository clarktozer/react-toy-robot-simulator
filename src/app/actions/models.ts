import { ActionType } from "typesafe-actions";
import { robotActions } from ".";
import { Facing } from "../enums";
import { ICoordinate } from "../models";

export interface IPlaceRobot {
    coordinates: ICoordinate;
    facing: Facing;
}

export type RobotAction = ActionType<typeof robotActions>;
