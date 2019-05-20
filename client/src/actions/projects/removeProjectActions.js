import axios from "axios";

import {
    REMOVE_PROJECT_DETAILS,
    PROJECT_REMOVE_LOADING,
    GET_ERRORS
} from "../types";

export const removeProjectDetails = (projectData) => dispatch => {
    axios
        .post("/api/projects/remove", projectData)
        .then(function (res) {
            dispatch( {
                type: REMOVE_PROJECT_DETAILS,
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
        type: PROJECT_REMOVE_LOADING
    };
};