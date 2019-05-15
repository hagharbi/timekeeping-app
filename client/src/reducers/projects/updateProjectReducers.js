import {
    UPDATE_PROJECT_DETAILS,
    PROJECT_EDIT_LOADING,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    editProject: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROJECT_DETAILS:
            return {
                ...state,
                editProject: action.payload,
            };
        case PROJECT_EDIT_LOADING:
            return {
                ...state,
                editProject: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};