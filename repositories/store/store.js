import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

////// FIXING THE NOOP STORAGE REDUX-PERSIST ERROR
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

////////////////*****************////////////////////////////




const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const persistConfig = {
    key: 'REDSYS',
    storage : storage,
    whitelist: ['cart', 'compare', 'auth', 'wishlist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
