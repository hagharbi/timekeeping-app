import axios from "axios";

import {
    SET_USER_DETAILS,
    USER_INFO_LOADING,
    GET_ERRORS
} from "../actions/types";

export const findUserDetails = (userData) => dispatch => {
    axios
        .post("/api/clients/finduser", userData)
        .then(function (res) {
            dispatch( {
                type: SET_USER_DETAILS,
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

// User loading
export const setUserLoading = () => {
    return {
        type: USER_INFO_LOADING
    };
};