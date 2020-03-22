import { Button } from "antd";
import React from "react";
import styles from "../../commandPalette.module.scss";
import { IReport } from "./models";

export const Report: React.FC<IReport> = ({ disabled, onGenerate }) => (
    <div className={styles.command}>
        <h4>Report</h4>
        <Button type="primary" disabled={disabled} onClick={onGenerate}>
            Generate
        </Button>
    </div>
);
