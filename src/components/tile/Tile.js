import React from "react";

export const Tile = ({contact}) => {
  const values = Object.values(contact)
  return (
    <div className="tile-container">
      <p className='tile-title'>{values[0]}</p>
      <p className='tile'>{values[1]}</p>
      <p className='tile'>{values[2]}</p>
    </div>
  );
};
