/* eslint-disable prettier/prettier */
/*import  { AsyncStorage } from 'react-native-async-storage'; */
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist : ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    let store = createStore(persistedReducer, {}, applyMiddleware());
    let persistor = persistStore(store);
    return { store, persistor};
};

