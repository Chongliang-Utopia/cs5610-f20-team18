import {CLOSE_REPORT, OPEN_REPORT} from "../actions/types";

const INTIAL_STATE = {
    report: false,
};

const adminReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_REPORT:
            return {...state, report: true};
        case CLOSE_REPORT:
            return {...state, report: false};
        default:
            return state;
    }
};

export default adminReducer
