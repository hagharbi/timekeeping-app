import axios from "axios";

import {
    UPDATE_PROJECT_DETAILS,
    PROJECT_EDIT_LOADING,
    GET_ERRORS
} from "../types";

export const updateProjectDetails = (projectData) => dispatch => {
    axios
        .post("/api/projects/update", projectData)
        .then(function (res) {
            dispatch( {
                type: UPDATE_PROJECT_DETAILS,
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
        type: PROJECT_EDIT_LOADING
    };
};