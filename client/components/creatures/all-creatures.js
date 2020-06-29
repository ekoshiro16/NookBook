import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AllFish from './all-fish'
import AllBugs from './all-bugs'
import {Route, Switch} from 'react-router-dom'

export class AllCreatures extends React.Component {
  // componentDidMount() {
  //   this.props.getCreatures()
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/creatures">
          <div className="container">
            <div className="row">
              <p className="flow-text">
                Look up creature data based on type below!
              </p>
            </div>

            <div className="all-critters-view">
              {/* Fish View */}
              <div className="fishView">
                <div className="fishTitle">
                  <Link to="/creatures/fish">
                    <p>All Fish</p>
                  </Link>
                </div>
                <div className="fishImg">
                  <a href="/creatures/fish">
                    <img
                      src="https://www.clipartmax.com/png/full/99-992431_r%C3%A9sultats-de-recherche-dimages-pour-%C2%AB-otter-chibi-cartoon-sea-otter-drawing.png"
                      className="img"
                      height="300px"
                      width="300px"
                      float="left"
                      object-fit="cover"
                    />
                  </a>
                </div>
              </div>

              {/* Bug View */}
              <div className="bugView">
                <div className="bugTitle">
                  <Link to="/creatures/bugs">
                    <p>All Bugs</p>
                  </Link>
                </div>
                <div className="bugImg">
                  <a href="/creatures/bugs">
                    <img
                      src="https://st2.depositphotos.com/2172759/11751/v/950/depositphotos_117512208-stock-illustration-cute-cartoon-bug-isolated-on.jpg"
                      className="img"
                      height="300px"
                      width="300px"
                      float="left"
                      object-fit="cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/creatures/fish">
          <AllFish />
        </Route>
        <Route path="/creatures/bugs">
          <AllBugs />
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    creatures: state.productReducer.AllCreatures
  }
}

const mapDispatch = dispatch => {
  return {
    getCreatures: () => dispatch(fetchCreatures())
  }
}

export default connect(mapState, mapDispatch)(AllCreatures)
