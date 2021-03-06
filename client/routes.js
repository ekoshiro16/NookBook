import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import AllCreatures from './components/creatures/all-creatures'
// import {IslandCreator} from './components/island-creator'
import {AllBugs} from './components/creatures/all-bugs'
import {AllFish} from './components/creatures/all-fish'
import {AllMusic} from './components/music/all-music'
import {AllSongs} from './components/music/all-songs'
import AllFossils from './components/all-fossils'
import AllVillagers from './components/villagers/all-villagers'
import IslandCreator from './components/island-creator'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/creatures" component={AllCreatures} />
        <Route path="/island-creator" component={IslandCreator} />
        <Route path="/music" component={AllMusic} />
        <Route path="/fossils" component={AllFossils} />
        <Route path="/villagers" component={AllVillagers} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
