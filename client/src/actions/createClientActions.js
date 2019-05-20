import axios from "axios";

import {
    CLIENT_CREATE_LOADING,
    CREATE_CLIENT_DETAILS,
    GET_ERRORS
} from "../actions/types";

export const createClientDetails = (clientData) => dispatch => {
    axios
        .post("/api/clients/create", clientData)
        .then(function (res) {
            dispatch( {
                type: CREATE_CLIENT_DETAILS,
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
        type: CLIENT_CREATE_LOADING
    };
};