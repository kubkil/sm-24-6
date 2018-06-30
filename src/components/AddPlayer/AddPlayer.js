import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {
// ref? ref={(node)} itd.
  let inputPlayerName = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onPlayerAdd(inputPlayerName.value);
    inputPlayerName = '';
  }

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      <input type="text" className="AddPlayer__input" ref={(node) => inputPlayerName = node} />
      <input type="submit" className="AddPlayer__submit" value="Add" />
    </form>
  )
};

export default AddPlayer;
