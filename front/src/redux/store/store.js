import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducer/reducer";

// Para que la extension del navegador funcione

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;