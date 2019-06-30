import { combineReducers } from 'redux';
import * as TYPES from './constants';
import { IState } from './types';

// .sort( () => Math.random() - 0.5);


const initialState: IState = {
  cardsList: [
    {
      id: 0,
      value: 'diamond',
      open: false
    },
    {
      id: 1,
      value: 'eye',
      open: false
    },
    {
      id: 2,
      value: 'hand',
      open: false
    },
    {
      id: 3,
      value: 'home',
      open: false
    },
    {
      id: 4,
      value: 'magnet',
      open: false
    },
    {
      id: 5,
      value: 'speaker',
      open: false
    },
    {
      id: 6,
      value: 'speed',
      open: false
    },
    {
      id: 7,
      value: 'unlocked',
      open: false
    },
    {
      id: 8,
      value: 'diamond',
      open: false
    },
    {
      id: 9,
      value: 'eye',
      open: false
    },
    {
      id: 10,
      value: 'hand',
      open: false
    },
    {
      id: 11,
      value: 'home',
      open: false
    },
    {
      id: 12,
      value: 'magnet',
      open: false
    },
    {
      id: 13,
      value: 'speaker',
      open: false
    },
    {
      id: 14,
      value: 'speed',
      open: false
    },
    {
      id: 15,
      value: 'unlocked',
      open: false
    }
  ].sort(() => Math.random() - 0.5),
  openCards: [],
  gameOver: false
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_GAME:
      return {
        ...state,
        gameOver: false
      };
    case TYPES.STOP_GAME:
      return {
        ...state,
        gameOver: true
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
        openCards: []
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
