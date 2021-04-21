// ===========Redux===============
// import { createStore, combineReducers } from "redux";
// import filterReducer from "./reducers/filterReducer";
// import contactsReducer from "./reducers/contactsReducer";

// const contactsReducers=combineReducers({
//     items: contactsReducer,
//     filter: filterReducer,
// })

// const rootReducer = combineReducers({
//   contacts:contactsReducers
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// ===========Redux Toolkit===============
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import filterReducer from "./contacts/reducers/filterReducer";
import reducers from "./contacts/reducers/contactsReducer";
import authReducers from './auth/auth-reducers'
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsReducers = combineReducers({
  items: reducers.contactsReducer,
  filter: filterReducer,
  loader: reducers.loader,
  error: reducers.error,
});

const rootReducer = combineReducers({
  contacts: contactsReducers,
  auth: persistReducer(authPersistConfig,authReducers)
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
