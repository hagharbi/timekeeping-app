import axios from "axios";

import {
    FIND_PROJECT_LOADING,
    FIND_PROJECT_DETAILS,
    GET_ERRORS
} from "../types";

export const findProjectDetails = (projectData) => dispatch => {
    axios
        .post("/api/projects/findone", projectData)
        .then(function (res) {
            dispatch( {
                type: FIND_PROJECT_DETAILS,
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


// Project loading
export const setUserLoading = () => {
    return {
        type: FIND_PROJECT_LOADING
    };
};