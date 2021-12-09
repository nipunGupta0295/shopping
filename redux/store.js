import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import shopReducer from "./ShoppingReducer";

const store = createStore(shopReducer);
//console.log(store);
export default store;