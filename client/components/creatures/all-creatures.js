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

            <div className="allCreaturesView">
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
                      src="https://dodo.ac/np/images/4/4b/Black_Bass_NH.png"
                      className="responsive-img"
                      height="400px"
                      width="400px"
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
                      src="https://dodo.ac/np/images/thumb/f/f1/Emperor_Butterfly_NH.png/180px-Emperor_Butterfly_NH.png"
                      className="responsive-img"
                      height="400px"
                      width="400px"
                      float="left"
                      object-fit="cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/creatures/fish">
          <AllFish />
        </Route>
        <Route exact path="/creatures/bugs">
          <AllBugs />
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    products: state.productReducer.AllCreatures
  }
}

const mapDispatch = dispatch => {
  return {
    getCreatures: () => dispatch(fetchCreatures())
  }
}

export default connect(mapState, mapDispatch)(AllCreatures)
