import thunkMiddleware from "redux-thunk";
import reduxPromiseMiddleware from "redux-promise-middleware";
import rootReducer from "../reducers";
import { applyMiddleware, compose, createStore } from "redux";

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware, reduxPromiseMiddleware()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
