import { takeLatest, put, select, delay } from 'redux-saga/effects'
import * as TYPES from './constants';
import * as actionCreators from './actions';

const getOpenCards = state => state.game.openCards;
const getAttempts = state => state.game.attempts;

function* openCardSaga(action) {
  const openCards = yield select(getOpenCards);

  yield put(actionCreators.setCardOpen(action.card));
  yield put(actionCreators.addToOpenCards(action.card));

  openCards.length && (yield compareOpenCardsSaga());
}

function* compareOpenCardsSaga() {
  const openCards = yield select(getOpenCards);
  const attempts = yield select(getAttempts);
  const [firstOpenCard, secondOpenCard] = openCards;

  yield delay(2000);
  if (firstOpenCard.value === secondOpenCard.value) {
    yield put(actionCreators.leaveCardOpen(firstOpenCard));
    yield put(actionCreators.leaveCardOpen(secondOpenCard));
    yield put(actionCreators.clearOpenCards(attempts));
    return;
  }

  yield put(actionCreators.closeCard(firstOpenCard));
  yield put(actionCreators.closeCard(secondOpenCard));
  yield put(actionCreators.clearOpenCards(attempts));
}

function* flow() {
  yield takeLatest(TYPES.OPEN_CARD, openCardSaga)
}


export default function* rootSaga() {
  yield flow()
}
