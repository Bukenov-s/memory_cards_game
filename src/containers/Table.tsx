import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Panel } from '../components/Panel';
import { Cell } from '../components/Cell';
import * as actionCreators from '../actions';

const mapStateToProps = ({ game }: any) => ({
  cardsList: game.cardsList,
  openCards: game.openCards,
  attempts: game.attempts
});

const mapDispatchToProps = {
  startGame: actionCreators.startGame,
  stopGame: actionCreators.stopGame,
  openCard: actionCreators.openCard,
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

const Table: FC<Props> = ({
  cardsList,
  openCards,
  attempts,
  startGame,
  openCard,
}) => {
  return (
    <div className="container">
      <Panel attempts={attempts} startGame={startGame} />
      <div className="table">
        {cardsList.map(({
          id,
          value,
          open
        }) => (
            <Cell
              key={id}
              id={id}
              value={value}
              openCards={openCards}
              open={open}
              openCard={openCard}
            />
          ))}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
