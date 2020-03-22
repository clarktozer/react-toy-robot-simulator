import { Button, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { Facing } from "../../../../enums";
import styles from "../../commandPalette.module.scss";
import { IPlace } from "./models";

const { Option } = Select;

export const Place: React.FC<IPlace> = ({ disabled, onPlace, xMax, yMax }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [orientation, setOrientation] = useState(Facing.North);

    const onOrientationChange = (value: Facing) => setOrientation(value);

    const onXChange = (value: number | undefined) => setX(value ? value : 0);

    const onYChange = (value: number | undefined) => setY(value ? value : 0);

    const onPlaceRobot = () => onPlace(x, y);

    return (
        <div className={styles.command}>
            <h4>Place</h4>
            <div className={styles.flexCenter}>
                <Button className={styles.commandControl} type="primary" onClick={onPlaceRobot} disabled={disabled}>
                    Place
                </Button>
                <div className={styles.commandControl}>
                    <label>X:</label>
                    <InputNumber value={x} min={0} max={xMax} defaultValue={0} onChange={onXChange} type="number" />
                </div>
                <div className={styles.commandControl}>
                    <label>Y:</label>
                    <InputNumber value={y} min={0} max={yMax} defaultValue={0} onChange={onYChange} type="number" />
                </div>
                <div className={styles.commandControl}>
                    <label>Facing:</label>
                    <Select className={styles.orientation} value={orientation} defaultValue={Facing.North} onChange={onOrientationChange}>
                        {Object.keys(Facing).map(key => (
                            <Option key={key} value={Facing[key as keyof typeof Facing]}>
                                {key}
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    );
};
