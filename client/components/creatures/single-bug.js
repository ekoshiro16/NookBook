import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBug} from '../../store/bug'
import M from 'materialize-css'

export class SingleBug extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getSingleBug(this.props.match.params.id)
  }

  render() {
    const bug = this.props.bug
    console.log(' hi hi test')
    return (
      <div>
        <div className="center-align">
          <h4 className="title">{bug.name['name-USen']}</h4>
          <div key={bug.id}>
            <img src={bug.image_uri} width="200" height="200" />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    bug: state.bugReducer.singleBug
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleBug: bugId => dispatch(fetchSingleBug(bugId))
  }
}

export default connect(mapState, mapDispatch)(SingleBug)
