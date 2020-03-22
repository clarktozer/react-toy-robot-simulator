import { notification } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { robotActions } from "../../actions";
import { TableDimensions } from "../../constants";
import { Rotation } from "../../enums";
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
    const facing = useSelector(selectors.getFacing);

    const onMove = () => dispatch(robotActions.move());

    const onRotate = (rotation: Rotation) => dispatch(robotActions.rotate(rotation));

    const onGenerate = () => {
        notification.info({
            message: `X: ${coordinates.x}, Y: ${coordinates.y}, Facing: ${facing}`
        });
    };

    const onPlace = (x: number, y: number) =>
        dispatch(
            robotActions.place({
                coordinates: {
                    x,
                    y
                },
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
