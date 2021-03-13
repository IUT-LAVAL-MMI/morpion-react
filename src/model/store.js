import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import asyncDemoReducer from './features/asyncDemo/asyncDemoSlice';

export default configureStore({
  reducer: {
    game: gameReducer,
    asyncDemo: asyncDemoReducer,
  },
});
