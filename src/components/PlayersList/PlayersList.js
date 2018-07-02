import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';
import '../Player/Player.css';

const PlayersList = (props) => (
  <ul className="PlayersList">
    <li className="Player">
      <span className="Heading">Name</span>
      <span className="Heading">Points</span>
      <span className="Heading">Add points</span>
      <span className="Heading">Remove points</span>
      <span className="Heading">Remove player</span>
    </li>
    {props.players.map((player, i) => (
      <Player
        key={i}
        name={player.name}
        score={player.score}
        onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
        onPlayerRemove={() => props.onPlayerRemove(i)}
      />)
    )}
  </ul>
);

export default PlayersList;
