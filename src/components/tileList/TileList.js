import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({list}) => {
  return (
    <div>
      {list.map((contact, idx) => {
          return (
            <Tile contact={contact} key={idx}/>
          )
      })
      }
    </div>
  );
};
