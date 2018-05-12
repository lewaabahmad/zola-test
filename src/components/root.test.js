import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from './root';
import UserTile from './userTile';

import DataFetcher from '../lib/dataFetcher';

it('renders as many user tiles as there are users', () => {
  const wrapper = shallow( <App /> );
  expect( wrapper.find( UserTile ).length ).to.equal( 8 );
});

it('can show users sorted alphabetically', () => {
  const wrapper = mount( <App /> );
  wrapper.find( 'select' ).simulate( 'change', { target: { value : 'alphabetical' } } );
  let userTiles = wrapper.find( UserTile )
  let sortedUsers = DataFetcher.allBy( 'alphabetical' )
  expect( userTiles.first().props().user ).to.equal( sortedUsers[0] );
  expect( userTiles.last().props().user ).to.equal( sortedUsers[7] );
});

it('can show filtered users by category', () => {
  const wrapper = mount( <App /> );
  wrapper.find( { type: 'radio' } ).first().simulate( 'change', { target: { value : 'cat2' } } );
  let userTiles = wrapper.find( UserTile )
  expect( userTiles.length ).to.equal( 4 );
});
