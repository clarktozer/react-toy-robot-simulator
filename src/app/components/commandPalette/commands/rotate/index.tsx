import { Button } from "antd";
import React from "react";
import { Rotation } from "../../../../enums";
import styles from "../../commandPalette.module.scss";
import { IRotate } from "./models";

export const Rotate: React.FC<IRotate> = ({ onRotate, disabled }) => {
    const onRotateLeft = () => onRotate(Rotation.Left);

    const onRotateRight = () => onRotate(Rotation.Right);

    return (
        <div className={styles.command}>
            <h4>Rotate</h4>
            <div className={styles.flexCenter}>
                <Button className={styles.commandControl} disabled={disabled} type="primary" onClick={onRotateLeft}>
                    Left
                </Button>
                <Button className={styles.commandControl} disabled={disabled} type="primary" onClick={onRotateRight}>
                    Right
                </Button>
            </div>
        </div>
    );
};
