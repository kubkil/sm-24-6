import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    }
  ];
  const appComponent = shallow(<App />);
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(10);
});
});

it('should add new player and update player state', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});
