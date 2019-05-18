import {
    FINDALL_PROJECT_LOADING,
    FINDALL_PROJECT_DETAILS,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    allProjectDetails: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FINDALL_PROJECT_DETAILS:
            return {
                ...state,
                allProjectDetails: action.payload,
            };
        case FINDALL_PROJECT_LOADING:
            return {
                ...state,
                allProjectDetails: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};