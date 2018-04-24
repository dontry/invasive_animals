import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import {applyMiddleware, compose, createStore} from "redux";

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
