import { bookReducer } from "./bookReducer";
import { isLoggedReducer } from "./isloggedreducer";
import { themeReducer } from "./themeReducer";
import {combineReducers} from "redux"

export let rootReducer=combineReducers({
themeR:themeReducer,
bookR:bookReducer,
isLoggedR:isLoggedReducer

})
