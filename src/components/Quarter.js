import React from 'react';

const Quarter = ({ quarter, person, prize }) => {
  return (
    <div className="quarterCard">
      <h1 className="quarterName">{quarter}</h1>
      {person ? (
        <div className="winningName">
          <span className="winningPerson">{person} </span>is the winner of{' '}
          <span className="prize">{prize}</span>
        </div>
      ) : (
        <div className="noWinnerYet">No ballers yet :( </div>
      )}
    </div>
  );
};

export default Quarter;
