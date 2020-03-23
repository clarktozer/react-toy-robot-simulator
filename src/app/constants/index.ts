import { Facing } from "../enums";
import { ICoordinate } from "../models";

export const TableDimensions: ICoordinate = {
    x: 5,
    y: 5
};

export const CalculateMove: Record<Facing, ICoordinate> = {
    NORTH: { x: 0, y: 1 },
    SOUTH: { x: 0, y: -1 },
    EAST: { x: 1, y: 0 },
    WEST: { x: -1, y: 0 }
};

export const RotateLeft: Record<Facing, Facing> = {
    [Facing.North]: Facing.West,
    [Facing.South]: Facing.East,
    [Facing.East]: Facing.North,
    [Facing.West]: Facing.South
};

export const RotateRight: Record<Facing, Facing> = {
    [Facing.North]: Facing.East,
    [Facing.South]: Facing.West,
    [Facing.East]: Facing.South,
    [Facing.West]: Facing.North
};
