import React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import * as actionCreators from '../actions';

const mapStateToProps = ({ game }: any) => ({
  cardsList: game.cardsList,
  openCards: game.openCards
});

const mapDispatchToProps = {
  startGame: actionCreators.startGame,
  stopGame: actionCreators.stopGame,
  openCard: actionCreators.openCard,
};

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

const Table: React.FunctionComponent<Props> = ({
  cardsList,
  openCards,
  startGame,
  stopGame,
  openCard,
}) => {
  return (
    <div className="table">
      {cardsList.map(({ id, value, open }) => (
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
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
