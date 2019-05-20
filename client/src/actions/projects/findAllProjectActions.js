import axios from "axios";

import {
    FINDALL_PROJECT_LOADING,
    FINDALL_PROJECT_DETAILS,
    GET_ERRORS
} from "../types";

export const findAllProjectDetails = (projectData) => dispatch => {
    axios
        .post("/api/projects/findbyuser", projectData)
        .then(function (res) {
            dispatch( {
                type: FINDALL_PROJECT_DETAILS,
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
        type: FINDALL_PROJECT_LOADING
    };
};