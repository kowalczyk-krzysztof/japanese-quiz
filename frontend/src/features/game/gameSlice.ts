import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Game {
  isGameStarted: boolean;
  points: number;
  lives: number;
  user_answer: boolean | null;
  is_question_answered: boolean;
  time_left: number;
}

const startingLives: number = 5;
const startingTime: number = 15;

const initialState: Game = {
  isGameStarted: false,
  points: 0,
  lives: startingLives,
  user_answer: null,
  is_question_answered: false,
  time_left: 15,
};
// Slice
const gameSlice = createSlice({
  name: `game`,
  initialState,
  reducers: {
    SET_GAME_STARTED(state) {
      state.isGameStarted = true;
    },
    SET_RESET_POINTS(state) {
      state.points = 0;
    },
    SET_POINTS(state, action: PayloadAction<number>) {
      state.points = state.points + action.payload;
    },
    SET_RESET_LIVES(state) {
      state.lives = startingLives;
    },
    SET_REMOVE_LIFE(state) {
      state.lives = state.lives - 1;
    },
    SET_USER_ANSWER(state, action: PayloadAction<boolean | null>) {
      state.user_answer = action.payload;
    },
    SET_QUESTION_ANSWERED(state) {
      state.is_question_answered = true;
    },
    SET_QUESTION_UNANSWERED(state) {
      state.is_question_answered = false;
    },
    SET_TIMER_START(state) {
      state.time_left = startingTime;
    },
    SET_DECREASE_TIME(state) {
      state.time_left = state.time_left - 1;
      if (state.time_left === 0) {
        state.lives = state.lives - 1;
        state.is_question_answered = true;
      }
    },
  },
});
// Selectors
export const gameSelector = (state: RootState) => state.game;
// Actions and reducer
export const {
  SET_GAME_STARTED,
  SET_POINTS,
  SET_RESET_LIVES,
  SET_REMOVE_LIFE,
  SET_USER_ANSWER,
  SET_QUESTION_ANSWERED,
  SET_QUESTION_UNANSWERED,
  SET_RESET_POINTS,
  SET_TIMER_START,
  SET_DECREASE_TIME,
} = gameSlice.actions;
export default gameSlice.reducer;
