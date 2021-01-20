import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from "./middleware/saga";

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;