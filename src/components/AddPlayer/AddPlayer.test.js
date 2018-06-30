import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('calls onPlayerAdd with correct name', () => {
  const mockedOnPlayerAdd = jest.fn();
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={mockedOnPlayerAdd} />);
  // getDOMNode() działa tylko w trybie mount
  const nameInput = addPlayerComponent.find('input').first().getDOMNode();
  nameInput.value = 'Ania';
  const form = addPlayerComponent.find('form');
  form.simulate('submit');
  expect(mockedOnPlayerAdd).toBeCalledWith('Ania');
});
