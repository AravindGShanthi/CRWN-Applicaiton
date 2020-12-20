import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default store;
