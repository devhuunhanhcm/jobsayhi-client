import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './Slice/AuthSlice';
import userReducer from './Slice/UserSlice';
import loadingReducer from './Slice/LoadingSlice';
import searchResultReducer from './Slice/SearchResultSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
    blacklist: ['user', 'loading', 'searchResult'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    user: userReducer,
    searchResult: searchResultReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);
