import { UpCircleFilled } from "@ant-design/icons";
import React from "react";
import { IRobotIcon } from "./models";
import styles from "./robotIcon.module.scss";

export const RobotIcon: React.FC<IRobotIcon> = ({ facing }) => (
    <UpCircleFilled
        className={styles.robotIcon}
        style={{
            transform: `rotate(${facing || 0}deg)`
        }}
    />
);
