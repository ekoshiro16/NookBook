import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

export class AllVillagers extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Switch>
        <Route exact path="/villagers">
          <div className="container">
            <div className="row">
              <p className="flow-text">
                Find all your favorite villagers below!
              </p>
            </div>
          </div>
          {/* </div> */}
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    villagers: state.villagerReducer.AllVillagers
  }
}

const mapDispatch = dispatch => {
  return {
    getVillagers: () => dispatch(fetchVillagers())
  }
}

export default connect(mapState, mapDispatch)(AllVillagers)
