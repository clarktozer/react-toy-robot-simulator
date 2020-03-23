import { TableDimensions } from "../constants";

export class Board {
    public static isValidCoordinates = (x: number, y: number) => x > -1 && x < TableDimensions.x && y > -1 && y < TableDimensions.y;
}
