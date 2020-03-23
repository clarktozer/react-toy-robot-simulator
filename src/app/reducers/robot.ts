import { produce } from "immer";
import { getType } from "typesafe-actions";
import { robotActions } from "../actions";
import { RobotAction } from "../actions/models";
import { CalculateMove, RotateLeft, RotateRight } from "../constants";
import { Facing, Rotation } from "../enums";
import { Board } from "../services/board";
import { IRobotState } from "./models";

const initialState: IRobotState = {
    facing: Facing.North,
    coordinates: {
        x: 0,
        y: 0
    },
    isPlaced: false,
    isMoveable: false
};

export const robotReducer = (state: IRobotState = initialState, action: RobotAction) =>
    produce(state, draft => {
        switch (action.type) {
            case getType(robotActions.place): {
                const { coordinates, facing } = action.payload;
                if (Board.isValidCoordinates(coordinates.x, coordinates.y)) {
                    const { x, y } = CalculateMove[facing];
                    draft.coordinates = coordinates;
                    draft.facing = facing;
                    draft.isMoveable = Board.isValidCoordinates(coordinates.x + x, coordinates.y + y);
                    draft.isPlaced = true;
                }
                break;
            }
            case getType(robotActions.move): {
                if (draft.isPlaced && draft.isMoveable) {
                    const { x, y } = CalculateMove[draft.facing];
                    const newX = draft.coordinates.x + x;
                    const newY = draft.coordinates.y + y;
                    draft.coordinates.x = newX;
                    draft.coordinates.y = newY;
                    draft.isMoveable = Board.isValidCoordinates(newX + x, newY + y);
                }
                break;
            }
            case getType(robotActions.rotate): {
                if (draft.isPlaced) {
                    const newFacing = action.payload === Rotation.Left ? RotateLeft[draft.facing] : RotateRight[draft.facing];
                    draft.facing = newFacing;
                    const { x, y } = CalculateMove[newFacing];
                    draft.isMoveable = Board.isValidCoordinates(draft.coordinates.x + x, draft.coordinates.y + y);
                }
                break;
            }
        }
    });
