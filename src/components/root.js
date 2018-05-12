import React, { Component } from 'react';

import UserTile from './userTile';

import DataFetcher from '../lib/dataFetcher';

class App extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      sortBy: null,
      filter: null
    }
  }

  renderUserTiles() {
    return DataFetcher.allBy( this.state.sortBy, this.state.filter ).map( ( user ) => {
      return( <UserTile user={ user } key={ user.name }/> )
    })
  }

  updateSort( event ) {
    this.setState({ sortBy: event.target.value.toLowerCase() })
  }

  updateFilter( event ) {
    this.setState({ filter: event.target.value.toLowerCase() })
  }

  renderCategoryFilters() {
    return DataFetcher.allCategories().map( ( category ) => {
      return( 
        <div className='mr-3' key={ category }>
          <input 
            type="radio" 
            selected={ this.state.filter === category } 
            aria-label={ category }
            name='filter'
            onChange={ this.updateFilter.bind( this ) }
            value={ category }
          />
          <label htmlFor={ category }>{ category }</label>
        </div>
    )
    })
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="title mt-3 mb-2">User Grid</h1>
        </header>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-8">
            <div className="form-group">
              <label htmlFor="select-sort">Sort by:</label>
              <select className="form-control" id="select-sort" onChange={ this.updateSort.bind( this ) }>
                <option></option>
                <option>Alphabetical</option>
                <option>Priority</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-4 offset-md-8">
            <div className="input-group">
              { this.renderCategoryFilters() }
            </div>
          </div>
        </div>
        <div className="row">
          { this.renderUserTiles() }
        </div>
      </div>
    );
  }
}

export default App;
