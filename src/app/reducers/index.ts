import { combineReducers } from "redux";
import { IApplicationState } from "./models";
import { robotReducer } from "./robot";
import { enableES5 } from "immer";

enableES5();

export const reducers = combineReducers<IApplicationState>({ robot: robotReducer });
