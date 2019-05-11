import {
    combineReducers
} from "redux";

import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import findUserReducer from "./findUserReducers";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    findUser: findUserReducer
});
