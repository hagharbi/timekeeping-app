import {
    FIND_PROJECT_LOADING,
    FIND_PROJECT_DETAILS,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    projectDetails: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FIND_PROJECT_DETAILS:
            return {
                ...state,
                projectDetails: action.payload,
            };
        case FIND_PROJECT_LOADING:
            return {
                ...state,
                projectDetails: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}