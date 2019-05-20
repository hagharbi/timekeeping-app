import axios from "axios";

import {
    UPDATE_PROJECTDROPS_DETAILS,
    PROJECTDROPS_EDIT_LOADING,
    GET_ERRORS
} from "../types";

export const updateProjectDropdowns = (projectData) => dispatch => {
    axios
        .post("/api/projects/updatedropdowns", projectData)
        .then(function (res) {
            dispatch( {
                type: UPDATE_PROJECTDROPS_DETAILS,
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
        type: PROJECTDROPS_EDIT_LOADING
    };
};