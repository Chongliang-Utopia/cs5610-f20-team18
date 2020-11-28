import {CLOSE_REPORT, OPEN_REPORT, SET_REPORT_TYPE} from "./types";

export const closeReport = () => {
    return {
        type: CLOSE_REPORT
    };
};

export const openReport = () => {
    return {
        type: OPEN_REPORT
    };
};

export const setReportType = (actualType) => {
    return  {
        type: SET_REPORT_TYPE,
        actualType
    };
};
