import { notification } from "antd";
import React from "react";
import { Provider } from "react-redux";
import styles from "./app.module.scss";
import { Board } from "./components/board";
import { CommandPalette } from "./components/commandPalette";
import { store } from "./store";

export const App: React.FC = () => {
    notification.config({
        placement: "topLeft"
    });

    return (
        <Provider store={store}>
            <div className={styles.robotApp}>
                <Board />
                <CommandPalette />
            </div>
        </Provider>
    );
};
