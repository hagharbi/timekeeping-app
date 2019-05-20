import axios from "axios";

import {
    UPDATE_LOG_DETAILS,
    LOG_EDIT_LOADING,
    GET_ERRORS
} from "../types";

export const updateLogDetails = (logData) => dispatch => {
    axios
        .post("/api/logs/update", logData)
        .then(function (res) {
            dispatch( {
                type: UPDATE_LOG_DETAILS,
                payload: res
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setUserLoading = () => {
    return {
        type: LOG_EDIT_LOADING
    };
};