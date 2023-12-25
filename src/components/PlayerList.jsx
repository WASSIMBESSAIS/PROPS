import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ playerinfo, showBd }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {playerinfo.map((el) => (
        <PlayerCard player={el} key={el.id} showBd={showBd} />
      ))}
    </div>
  );
};

export default PlayerList;
