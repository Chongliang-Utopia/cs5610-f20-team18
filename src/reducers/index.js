import {combineReducers} from "redux";
import authReducer from "./authReducer";
import searchBookReducer from "./searchBookReducer";
import adminReducer from "./adminReducer"

export default combineReducers({
    auth: authReducer,
    searchBookReducer: searchBookReducer,
    admin: adminReducer
});
