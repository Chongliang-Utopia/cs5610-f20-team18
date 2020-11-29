import {combineReducers} from "redux";
import authReducer from "./authReducer";
import searchBookReducer from "./searchBookReducer";
import authWithEmailReducer from "./authWithEmailReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
    auth: authReducer,
    authWithEmail: authWithEmailReducer,
    message: messageReducer,
    searchBookReducer: searchBookReducer
});


