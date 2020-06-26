import React from 'react'
import {connect} from 'react-redux'
import {fetchBugs} from '../../store/bug'

export class AllBugs extends React.Component {
  componentDidMount() {
    this.props.getBugs()
  }

  render() {
    const bugs = this.props.bugs
    return (
      <div className="container">
        <div className="row">
          <p className="flow-text">Bugs (Critterpedia View)</p>
        </div>
        <div className="row">
          <div id="all-bugs-view">
            <div className="column">
              {/* Common Butterfly */}
              <div className="previewBox">
                <img
                  src="https://acnhapi.com/v1/icons/bugs/1"
                  className="responsive-img"
                  height="75px"
                  width="75px"
                />
              </div>

              {/* Yellow Butterfly */}
              <div className="previewBox">
                <img
                  src="https://acnhapi.com/v1/icons/bugs/2"
                  className="responsive-img"
                  height="75px"
                  width="75px"
                />
              </div>

              {/* Tiger Butterfly */}
              <div className="previewBox">
                <img
                  src="https://acnhapi.com/v1/icons/bugs/3"
                  className="responsive-img"
                  height="75px"
                  width="75px"
                />
              </div>

              {/* Peacock Butterfly */}
              <div className="previewBox">
                <img
                  src="https://acnhapi.com/v1/icons/bugs/4"
                  className="responsive-img"
                  height="75px"
                  width="75px"
                />
              </div>

              {/* Common Bluebottle */}
              <div className="previewBox">
                <img
                  src="https://acnhapi.com/v1/icons/bugs/5"
                  className="responsive-img"
                  height="75px"
                  width="75px"
                />
              </div>
            </div>
          </div>
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
