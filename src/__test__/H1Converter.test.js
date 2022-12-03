import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import H1Converter from  '../pages/H1Converter';
import store from '../Redux/store';

it('Missions renders correctly', () => {
  const converter = renderer
    .create(<Provider store={store}><H1Converter /></Provider>)
    .toJSON();
  expect(converter).toMatchSnapshot();
});