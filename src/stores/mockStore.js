import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { createStore, compose, applyMiddleware } from "redux";

export default function mockStore(preloadedState) {
  return createStore(
    formReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
