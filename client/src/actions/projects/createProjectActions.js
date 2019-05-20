import axios from "axios";

import {
    CREATE_PROJECT_DETAILS,
    PROJECT_CREATE_LOADING,
    GET_ERRORS
} from "../types";

export const createProjectDetails = (projectData) => dispatch => {
    axios
        .post("/api/projects/create", projectData)
        .then(function (res) {
            dispatch( {
                type: CREATE_PROJECT_DETAILS,
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
        type: PROJECT_CREATE_LOADING
    };
};