import axios from "axios";

import {
    REMOVE_LOG_DETAILS,
    LOG_REMOVE_LOADING,
    GET_ERRORS
} from "../types";

export const removeLogDetails = (logData) => dispatch => {
    axios
        .post("/api/logs/remove", logData)
        .then(function (res) {
            dispatch( {
                type: REMOVE_LOG_DETAILS,
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
        type: LOG_REMOVE_LOADING
    };
};