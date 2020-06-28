import React from 'react'
import {connect} from 'react-redux'
import {fetchBugs} from '../../store/bug'
import SingleBug from './single-bug'
import {Route, Switch, Link} from 'react-router-dom'

export class AllBugs extends React.Component {
  componentDidMount() {
    this.props.getBugs()
  }

  render() {
    console.log(this.props)
    const bugs = Object.entries(this.props.bugs)

    return (
      <Switch>
        <Route exact path="/creatures/bugs">
          <div className="container">
            <div className="row">
              <p className="flow-text">Bugs (Critterpedia View)</p>
            </div>
            <div className="row">
              {bugs
                ? bugs.map(([key, bug]) => {
                    return (
                      <div className="col s1" key={bug.id}>
                        <a href={`/creatures/bugs/${bug.id}`}>
                          <img src={bug.icon_uri} className="responsive-img" />
                        </a>
                      </div>
                    )
                  })
                : 'LOADING...'}
            </div>
          </div>
        </Route>
        <Route path="/creatures/bugs/:id">
          <SingleBug />
        </Route>
      </Switch>
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
