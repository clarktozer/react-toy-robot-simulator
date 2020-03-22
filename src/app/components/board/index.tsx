import React from "react";
import { useSelector } from "react-redux";
import { TableDimensions } from "../../constants";
import { selectors } from "../../selectors";
import { RobotIcon } from "../robotIcon";
import styles from "./board.module.scss";

export const Board: React.FC = () => {
    const isPlaced = useSelector(selectors.getIsPlaced);
    const coordinates = useSelector(selectors.getCoordinates);
    const facing = useSelector(selectors.getFacing);

    return (
        <div className={styles.robotGrid}>
            <div className={styles.flexGrid}>
                {Array.from(Array(TableDimensions.x).keys(), key => key)
                    .reverse()
                    .map(rowIndex => (
                        <div key={rowIndex} className={styles.flexGridRow}>
                            {Array.from(Array(TableDimensions.y).keys(), key => key).map(colIndex => (
                                <div key={colIndex} className={styles.flexGridCol}>
                                    <div className={styles.flexGridTile}>
                                        {isPlaced && rowIndex === coordinates.y && colIndex === coordinates.x ? (
                                            <RobotIcon facing={facing} />
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};
