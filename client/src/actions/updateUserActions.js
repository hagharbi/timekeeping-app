import axios from "axios";

import {
    UPDATE_USER_DETAILS,
    USER_EDIT_LOADING,
    GET_ERRORS
} from "../actions/types";

export const updateUserDetails = (userData) => dispatch => {
    axios
        .post("/api/clients/updateuser", userData)
        .then(function (res) {
            dispatch({
                type: UPDATE_USER_DETAILS,
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
        type: USER_EDIT_LOADING
    };
};