import React, { useCallback, MouseEventHandler } from 'react';
import * as actionCreators from '../actions';
import { ICard } from '../types';

interface IProps {
  id: number;
  value: string;
  open: boolean;
  openCards: ICard[];
  openCard: typeof actionCreators.openCard;
}


const Cell: React.FunctionComponent<IProps> = ({
  id,
  value,
  open,
  openCard,
  openCards,
}) => {
  const handleOpenClick: MouseEventHandler<
    HTMLButtonElement
  > = useCallback(() => {
    openCard({ id, open, value });
  }, [id, open, value, openCard]);

  return (
    <button
      onClick={handleOpenClick}
      className={open ? `${'cell'} ${value}` : 'cell'}
      disabled={openCards.length === 2 || open}
    >
    </button>
  );
};

export default Cell;
