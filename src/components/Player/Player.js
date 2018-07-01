import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span className="Player__button" onClick={() => props.onPlayerScoreChange(1)} ><FontAwesomeIcon icon="plus" className="Icon" /></span>
    <span className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} ><FontAwesomeIcon icon="minus" className="Icon" /></span>
    <span className="Player__remove" onClick={() => props.onPlayerRemove()} ><FontAwesomeIcon icon="trash-alt" className="Icon" /></span>
  </li>
);

export default Player;
