import React from 'react'
import {connect} from 'react-redux'

class AllBugs extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <p className="flow-text">Bugs A-Z</p>
          <div id="all-bugs-view" />
        </div>
      </div>
    )
  }
}

export default AllBugs
