import { Rotation } from "../../../../enums";

export interface IRotate {
    disabled?: boolean;
    onRotate: (rotation: Rotation) => void;
}
