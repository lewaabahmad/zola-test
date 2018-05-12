import seedData from '../seedData'

export default (function() {

  function all( filter=null ) {
    if ( filter ) {
      return seedData["data"].filter(( user ) => { return ( filter === user.category ) })
    } else {
      return seedData["data"]
    }
  }

  function allBy( sort=null, filter=null ) {
    switch( sort ) {
      case 'alphabetical':
        return (() => {
          return this.all( filter ).sort( (a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          })
        })()
      case 'priority':
        return (() => {
          return this.all( filter ).sort( (a, b) => {
            if(a.priority < b.priority) return -1;
            if(a.priority >= b.priority) return 1;
          })
        })()
        break;
      default:
        return this.all( filter )
    }
  }

  function allCategories() {
    let categories = []
    let seedData = this.all()
    for ( let i = 0; i < seedData.length; i++ ) {
      if ( categories.indexOf( seedData[i].category ) === -1 ) {
        categories.push( seedData[i].category )
      }
    }
    return categories
  }

  return {
    all: all,
    allBy: allBy,
    allCategories: allCategories,
  }

})()
