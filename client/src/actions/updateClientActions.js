import axios from "axios";

import {
    UPDATE_CLIENT_DETAILS,
    CLIENT_EDIT_LOADING,
    GET_ERRORS
} from "../actions/types";

export const updateClientDetails = (clientData) => dispatch => {
    axios
        .post("/api/clients/updateclient", clientData)
        .then(function (res) {
            dispatch( {
                type: UPDATE_CLIENT_DETAILS,
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
        type: CLIENT_EDIT_LOADING
    };
};