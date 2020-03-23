import { UpCircleFilled } from "@ant-design/icons";
import classnames from "classnames";
import React from "react";
import { IRobotIcon } from "./models";
import styles from "./robotIcon.module.scss";

export const RobotIcon: React.FC<IRobotIcon> = ({ facing }) => (
    <div className={styles.robotIcon}>
        <UpCircleFilled
            className={classnames({
                [facing.toLowerCase()]: facing != null
            })}
        />
    </div>
);
