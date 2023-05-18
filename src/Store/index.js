import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer, composedEnhancer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

// return { store, persistor }
// const store = createStore(rootReducer, composedEnhancer);

export { store, persistor };











// import rootReducer from './reducers';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from 'redux-thunk';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(),
//     applyMiddleware(thunk)
// );

// export default store;