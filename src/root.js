import React, { Component } from 'react';

import seedData from './seed.js';

class App extends Component {

  renderUserTiles() {
    let styles
    return seedData.data.map( ( user ) => {
      styles = this.stylesFor( user )
      return(
        <div className="col-12 col-md-4 mb-3">
          <div className="p-3" style={ styles.container }>
            <h2 style={ styles.name }>
              { user.name }
            </h2>
            <p style={ styles.p }>
              { user.category }
            </p>
            <p 
              className="font-italic"
              style={ styles.p }
            >
              { user.age }
            </p>
          </div>
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
          { this.renderUserTiles() }
        </div>
      </div>
    );
  }

  stylesFor( user ) {
    let backgroundColor
    switch( user.priority ) {
      case 1:
        backgroundColor = '#ffb168'
        break;
      case 2:
        backgroundColor = '#8dff6d'
        break;
      case 3:
        backgroundColor = '#9bbcff'
        break;
      case 4:
        backgroundColor = '#ba50b4'
        break;
      default:
        backgroundColor = '#DDD'
    }
    return {
      container: {
        border: '2px solid black',
        background: backgroundColor,
      },
      name: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
      paragraph: {
        fontSize: '16px',
        fontStyle: 'italic'
      }
    }
  }
}

export default App;
