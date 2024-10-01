import { rootReducer } from "./rootReducer";
import {legacy_createStore} from "redux"
import {applyMiddleware} from "redux"
import logger from "redux-logger"
import {thunk} from "redux-thunk"

export let store=legacy_createStore(rootReducer,applyMiddleware(logger,thunk))