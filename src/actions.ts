import * as TYPES from './constants';
import { ICard } from './types';

export const startGame = () => ({
  type: TYPES.START_GAME
});

export const stopGame = () => ({
  type: TYPES.STOP_GAME
});

export const openCard = (card: ICard) => ({
  type: TYPES.OPEN_CARD,
  card
});

export const setCardOpen = (card: ICard) => ({
  type: TYPES.SET_CARD_OPEN,
  card
})

export const addToOpenCards = (card: ICard) => ({
  type: TYPES.ADD_TO_OPEN_CARDS,
  card
});

export const leaveCardOpen = (card: ICard) => ({
  type: TYPES.LEAVE_CARD_OPEN,
  card
})

export const closeCard = (card: ICard) => ({
  type: TYPES.CLOSE_CARD,
  card
})

export const clearOpenCards = () => ({
  type: TYPES.CLEAR_OPEN_CARDS
});
