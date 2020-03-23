import { notification } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { robotActions } from "../../actions";
import { TableDimensions } from "../../constants";
import { Facing, Rotation } from "../../enums";
import { ICoordinate } from "../../models";
import { selectors } from "../../selectors";
import styles from "./commandPalette.module.scss";
import { Move } from "./commands/move";
import { Place } from "./commands/place";
import { Report } from "./commands/report";
import { Rotate } from "./commands/rotate";

export const CommandPalette: React.FC = () => {
    const dispatch = useDispatch();
    const isPlaced = useSelector(selectors.getIsPlaced);
    const isMoveable = useSelector(selectors.getIsMoveable);
    const coordinates = useSelector(selectors.getCoordinates);
    const currentFacing = useSelector(selectors.getFacing);

    const onMove = () => dispatch(robotActions.move());

    const onRotate = (rotation: Rotation) => dispatch(robotActions.rotate(rotation));

    const onGenerate = () => {
        notification.info({
            message: `X: ${coordinates.x}, Y: ${coordinates.y}, Facing: ${currentFacing}`
        });
    };

    const onPlace = (coordinates: ICoordinate, facing: Facing) =>
        dispatch(
            robotActions.place({
                coordinates,
                facing
            })
        );

    return (
        <div className={styles.commandPalette}>
            <Place onPlace={onPlace} xMax={TableDimensions.x - 1} yMax={TableDimensions.y - 1} />
            <Rotate disabled={!isPlaced} onRotate={onRotate} />
            <Move disabled={!isPlaced || !isMoveable} onMove={onMove} />
            <Report disabled={!isPlaced} onGenerate={onGenerate} />
        </div>
    );
};
