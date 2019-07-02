import { combineReducers } from 'redux';
import * as TYPES from './constants';
import { IState } from './types';
import { createCardsList } from './cards';

const initialState: IState = {
  cardsList: createCardsList(),
  openCards: [],
  attempts: 0
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_GAME:
      return {
        ...state,
        cardsList: createCardsList(),
        openCards: []
      };
    case TYPES.SET_CARD_OPEN:
      return {
        ...state,
        cardsList: state.cardsList.map(card => {
          if (card.id === action.card.id) {
            card.open = true;
          }
          return card;
        })
      };
    case TYPES.ADD_TO_OPEN_CARDS:
      return {
        ...state,
        openCards: [...state.openCards, action.card]
      }
    case TYPES.CLOSE_CARD:
      return {
        ...state,
        cardsList: state.cardsList.map(card => {
          if (card.id === action.card.id) {
            card.open = false;
          }
          return card;
        })
      }
    case TYPES.CLEAR_OPEN_CARDS:
      return {
        ...state,
        openCards: [],
        attempts: action.attempts + 1
      }
    default:
      return {
        ...state
      };
  }
};

export default combineReducers({
  game: game
});
