import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todosReducer from 'redux/todos/todos-reducers';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import todosReducer from './todos/todos-reducers';

// const todosPersistConfig = {
//   key: 'todos',
//   storage,
//   blacklist: ['filter', 'todoToEdit'],
// };

// export const store = configureStore({
//   reducer: {
//     todos: persistReducer(todosPersistConfig, todosReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });

// export const persistor = persistStore(store);
