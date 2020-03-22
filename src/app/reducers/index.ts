import { combineReducers } from "redux";
import { IApplicationState } from "./models";
import { robotReducer } from "./robot";

export const reducers = combineReducers<IApplicationState>({ robot: robotReducer });
