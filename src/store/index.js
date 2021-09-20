import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import redux from "./redux";
import saga from "./saga";

const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  redux,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

saga.forEach((saga) => sagaMiddleware.run(saga));

export default store;
