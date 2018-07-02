import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {
  let inputPlayerName = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onPlayerAdd(inputPlayerName.value);
    inputPlayerName.value = '';
  }

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      {/* ref = coś jak getElementById */}
      <input type="text" className="AddPlayer__input" placeholder="Type name of a player" ref={(node) => inputPlayerName = node} />
      <input type="submit" className="AddPlayer__submit" value="Add" />
    </form>
  )
};

export default AddPlayer;
