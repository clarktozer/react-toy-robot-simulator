import { produce } from "immer";
import { getType } from "typesafe-actions";
import { robotActions } from "../actions";
import { RobotAction } from "../actions/models";
import { Facing } from "../enums";
import { IRobotState } from "./models";

const initialState: IRobotState = {
    facing: Facing.North,
    coordinates: {
        x: 0,
        y: 0
    },
    isPlaced: false,
    isMoveable: false // check if will go off the table when moved
};

export const robotReducer = (state: IRobotState = initialState, action: RobotAction) =>
    produce(state, draft => {
        switch (action.type) {
            case getType(robotActions.place): {
                const { coordinates, facing } = action.payload;

                draft.isPlaced = true;
                draft.coordinates = coordinates;
                draft.facing = facing;
                break;
            }
            case getType(robotActions.move): {
                break;
            }

            case getType(robotActions.rotate): {
                //check if cant move, set draft.isMovable = false if not;
                break;
            }
        }
    });
