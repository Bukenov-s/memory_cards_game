import React, { FC } from 'react';

// time? restart? attempts?

const Panel: FC<any> = ({
  startGame,
  attempts
}) => {
  return (
    <div className="panel">
      <span>{attempts}</span>
      <button onClick={() => { startGame(); }}>restart</button>
    </div>
  )
}

export { Panel };