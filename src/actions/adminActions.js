import {CLOSE_REPORT, OPEN_REPORT} from "./types";

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

