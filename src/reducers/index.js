import {combineReducers} from "redux";
import searchBookReducer from "./searchBookReducer";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import adminReducer from "./adminReducer"

export default combineReducers({
    auth: authReducer,
    message: messageReducer,
    searchBookReducer: searchBookReducer,
    admin: adminReducer
});


