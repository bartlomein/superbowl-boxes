import React from 'react';

const Quarter = ({ quarter, person, prize }) => {
  return (
    <div>
      <h1>{quarter}</h1>
      {person ? (
        <div className="winningName">
          {person} is the winner of {prize}
        </div>
      ) : (
        <div>No winners yet playa</div>
      )}
    </div>
  );
};

export default Quarter;
