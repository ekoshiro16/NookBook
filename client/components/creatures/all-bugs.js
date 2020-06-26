import React from 'react'
import {connect} from 'react-redux'
import {fetchBugs} from '../../store/bug'

export class AllBugs extends React.Component {
  componentDidMount() {
    this.props.getBugs()
  }

  render() {
    console.log('props', this.props)
    console.log('this', this)
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

const mapState = state => {
  return {
    bugs: state.bugReducer.allBugs
  }
}

const mapDispatch = dispatch => {
  return {
    getBugs: () => dispatch(fetchBugs())
  }
}

export default connect(mapState, mapDispatch)(AllBugs)
