import { Button } from "antd";
import React from "react";
import styles from "../../commandPalette.module.scss";
import { IMove } from "./models";

export const Move: React.FC<IMove> = ({ onMove, disabled }) => (
    <div className={styles.command}>
        <h4>Move</h4>
        <Button type="primary" disabled={disabled} onClick={onMove}>
            Forward
        </Button>
    </div>
);
