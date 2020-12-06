import {combineReducers} from "redux";
import searchBookReducer from "./searchBookReducer";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import adminReducer from "./adminReducer"
import profileReducer from "./profileReducer";
import bookReducer from "./bookReducer";
import {reducer as formReducer } from "redux-form";

export default combineReducers({
    auth: authReducer,
    message: messageReducer,
    searchBookReducer: searchBookReducer,
    admin: adminReducer,
    profile: profileReducer,
    bookDetail: bookReducer,
    form: formReducer,
});


