import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

export class AllSongs extends React.Component {
  // componentDidMount() {
  //   this.props.getCreatures()
  // }

  render() {
    return (
      <div>
        <p>hello world!</p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    songs: state.productReducer.AllSongs
  }
}

const mapDispatch = dispatch => {
  return {
    getSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mapState, mapDispatch)(AllSongs)
