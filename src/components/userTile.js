import React, { Component } from 'react';

class UserTile extends Component {

  render() {
    let styles = this.stylesFor( this.props.user )
    return(
      <div className="col-12 col-md-4 mb-3">
        <div className="p-3" style={ styles.container }>
          <h2 style={ styles.name }>
            { this.props.user.name }
          </h2>
          <p style={ styles.paragraph }>
            { this.props.user.category }
          </p>
          <p 
            className="font-italic"
            style={ styles.paragraph }
          >
            { this.props.user.age }
          </p>
        </div>
      </div>
    )
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

export default UserTile;
