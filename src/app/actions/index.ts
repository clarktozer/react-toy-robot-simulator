import { createAction } from "typesafe-actions";
import { Rotation } from "../enums";
import { IPlaceRobot } from "./models";

export const robotActions = {
    place: createAction("PLACE_ROBOT")<IPlaceRobot>(),
    move: createAction("MOVE_ROBOT")(),
    rotate: createAction("ROTATE_ROBOT")<Rotation>()
};
