import React from 'react'
import {connect} from 'react-redux'
import {fetchBugs} from '../../store/bug'

export class AllBugs extends React.Component {
  componentDidMount() {
    this.props.getBugs()
  }

  render() {
    const bugs = this.props.bugs
    const bugsArr = Object.entries(this.props.bugs)
    const indexVal = 0
    console.log('bugs', bugsArr)
    return (
      <div className="container">
        <div className="row">
          <p className="flow-text">Bugs (Critterpedia View)</p>
        </div>
        <div className="row">
          {bugsArr
            ? bugsArr.map(([key, bug]) => {
                return (
                  // console.log('bug info', bug)
                  <div className="col s1" key={bug.id}>
                    <a href={`/products/${bug.id}`}>
                      <img src={bug.icon_uri} className="responsive-img" />
                    </a>
                  </div>
                )
              })
            : 'LOADING...'}
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
