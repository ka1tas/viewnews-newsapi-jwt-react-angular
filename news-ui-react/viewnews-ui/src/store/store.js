import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import articleReducer from './reducers/ArticleReducer';
import userReducer from './reducers/UserReducer';
import rootSaga from './sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

export const store = createStore(
    combineReducers({
        user: userReducer,
        articles: articleReducer
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)


sagaMiddleware.run(rootSaga)