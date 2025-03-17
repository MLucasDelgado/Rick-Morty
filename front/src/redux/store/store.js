import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Usa "thunk" en lugar de "thunkMiddleware"
import reducer from "../reducer/reducer";

// Habilita Redux DevTools si está disponible
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) // Cambiado a thunk
);

export default store;
