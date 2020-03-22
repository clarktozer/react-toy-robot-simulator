import { IApplicationState } from "../reducers/models";

export const selectors = {
    getCoordinates: ({ robot }: IApplicationState) => robot.coordinates,
    getFacing: ({ robot }: IApplicationState) => robot.facing,
    getIsPlaced: ({ robot }: IApplicationState) => robot.isPlaced,
    getIsMoveable: ({ robot }: IApplicationState) => robot.isMoveable
};
