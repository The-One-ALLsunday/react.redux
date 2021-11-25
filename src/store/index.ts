import { createStore, applyMiddleware, combineReducers } from "redux";
// import promiseMiddleware from 'redux-promise'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storeData from "@/store/reducers";

/**
 * 区分开发 & 生产环境
 */

const reducers = combineReducers({ storeData });

const persistConfig = { key: "root", storage };

const myPersistReducer = persistReducer(persistConfig, reducers);

export const store: any = createStore(
  myPersistReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export const persistor = persistStore(store);
