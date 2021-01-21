import { createStore, compose, applyMiddleware, CombinedState, Store } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import rootReducer from './rootReducer';
import createSagaMiddleware, { SagaMiddleware } from '@redux-saga/core';
import { rootSaga } from './middleware/saga';
import { PostsState, PostState, SagaStore } from '../type';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

// create a makeStore function
const makeStore = (context: Context): Store => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<CombinedState<PostsState & PostState>>(makeStore, {
  debug: false,
});
