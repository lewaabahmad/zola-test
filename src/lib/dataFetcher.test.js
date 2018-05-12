import React from 'react';
import { expect } from 'chai';
// import { shallow } from 'enzyme';

import DataFetcher from './dataFetcher';

describe('all', () => {
  it('returns all users in standard order', () => {
    let data = DataFetcher.all().map(( user ) => { return user.name }) 
    expect( data ).to.eql( [ 'Joe', 'Jane', 'Kevin', 'Lucy', 'Colin', 'Franny', 'Neil', 'Katy' ] );
  });

  it('can accept a list of filters that limits returned users', () => {
    let data = DataFetcher.all( 'cat2' ).map(( user ) => { return user.category }) 
    expect( data ).to.eql( [ 'cat2', 'cat2', 'cat2', 'cat2' ] );
  });
});

describe('allBy', () => {
  it('returns all users in standard order by default', () => {
    let data = DataFetcher.allBy().map(( user ) => { return user.name }) 
    expect( data ).to.eql( [ 'Joe', 'Jane', 'Kevin', 'Lucy', 'Colin', 'Franny', 'Neil', 'Katy' ] );
  });

  it('returns all users in alphabetical order if passed "alphabetical" as argument', () => {
    let data = DataFetcher.allBy( "alphabetical" ).map(( user ) => { return user.name }) 
    expect( data ).to.eql( [ 'Colin', 'Franny', 'Jane', 'Joe', 'Katy', 'Kevin', 'Lucy', 'Neil' ] );
  });

  it('returns all users in order of priority if passed "priority" as argument', () => {
    let data = DataFetcher.allBy( "priority" ).map(( user ) => { return user.priority }) 
    expect( data ).to.eql( [ 1, 1, 2, 2, 3, 3, 4, 4 ] );
  });

  it('can accept a list of filters that limits returned users', () => {
    let data = DataFetcher.allBy( 'alphabetical', 'cat2' ).map(( user ) => { return [ user.name, user.category ] }) 
    expect( data ).to.eql( 
      [ [ 'Joe', 'cat2' ],
        [ 'Katy', 'cat2' ],
        [ 'Kevin', 'cat2' ],
        [ 'Neil', 'cat2' ] ] );
  });
});

describe('allCategories', () => {
  it('returns all unique categories', () => {
    let data = DataFetcher.allCategories()
    expect( data ).to.eql( [ 'cat3', 'cat2', 'cat1' ] );
  });
});

