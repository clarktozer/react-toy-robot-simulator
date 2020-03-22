import { applyMiddleware, createStore, Middleware } from "redux";
import logger from "redux-logger";
import { reducers } from "../reducers";

const getMiddlewares = () => {
    const middlewares: Middleware[] = [];

    if (process.env.NODE_ENV === "development") {
        middlewares.push(logger);
    }

    return middlewares;
};

export const store = createStore(reducers, applyMiddleware(...getMiddlewares()));
