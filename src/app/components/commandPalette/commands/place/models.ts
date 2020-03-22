export interface IPlace {
    disabled?: boolean;
    onPlace: (x: number, y: number) => void;
    xMax: number;
    yMax: number;
}
