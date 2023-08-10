import { configureStore } from "@reduxjs/toolkit";

import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import shopSlice from "./shop/shopSlice";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
};

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("new action");
    console.info("prevState: ", store.getState());

    console.info(`type: ${action.type}`);
    console.info("payload: ", action.payload);

    next(action);

    console.info("newState: ", store.getState());
};


const store = configureStore({
    reducer: {
        shop: shopSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== "production"
});

// const persistor = persistStore(store);

export { store };
