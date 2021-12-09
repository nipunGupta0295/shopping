import { combineReducers } from "redux";
import shopReducer from "./ShoppingReducer";

const rootReducer = combineReducers({
    shopReducer: shopReducer,
});

export default rootReducer;