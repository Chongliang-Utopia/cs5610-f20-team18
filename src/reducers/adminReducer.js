import {CLOSE_REPORT, OPEN_REPORT, SET_REPORT_TYPE} from "../actions/types";

const INTIAL_STATE = {
    report: false,
    type: ''
};

const adminReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_REPORT:
            return {...state, report: true};
        case CLOSE_REPORT:
            return {...state, report: false};
        case SET_REPORT_TYPE:
            return {...state, type: action.actualType};
        default:
            return state;
    }
};

export default adminReducer
