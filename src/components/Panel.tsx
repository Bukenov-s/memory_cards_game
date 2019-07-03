import React, { FC, useCallback } from 'react';

interface IProps {
  attempts: number;
  startGame: () => void;
}

const Panel: FC<IProps> = ({
  startGame,
  attempts
}) => {
  const handleStartClick = useCallback(() => {
    startGame();
  }, [attempts, startGame]);
  return (
    <div className="panel">
      <span><b>Attempts:</b> {attempts}</span>
      <div className="spacer" />
      <button
        className="start"
        onClick={handleStartClick}
      >
        restart
      </button>
    </div>
  )
}

export { Panel };