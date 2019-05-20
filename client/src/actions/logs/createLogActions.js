import axios from "axios";

import {
    CREATE_LOG_DETAILS,
    LOG_CREATE_LOADING,
    GET_ERRORS
} from "../types";

export const createLogDetails = (logData) => dispatch => {
    axios
        .post("/api/logs/create", logData)
        .then(function (res) {
            dispatch( {
                type: CREATE_LOG_DETAILS,
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
        type: LOG_CREATE_LOADING
    };
};