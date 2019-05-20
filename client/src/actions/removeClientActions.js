import axios from "axios";

import {
    REMOVE_CLIENT_DETAILS,
    CLIENT_REMOVE_LOADING,
    GET_ERRORS
} from "../actions/types";

export const removeClientDetails = (clientData) => dispatch => {
    axios
        .post("/api/clients/removeclient", clientData)
        .then(function (res) {
            dispatch( {
                type: REMOVE_CLIENT_DETAILS,
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
        type: CLIENT_REMOVE_LOADING
    };
};