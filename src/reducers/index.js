import {combineReducers} from "redux";
import authReducer from "./authReducer";
import searchBookReducer from "./searchBookReducer";
export default combineReducers({
    auth: authReducer,
    searchBookReducer: searchBookReducer
});
