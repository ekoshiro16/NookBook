import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AllSongs from './all-songs'
import {Route, Switch} from 'react-router-dom'

export class AllMusic extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/music">
          <div className="container">
            <div className="row">
              <p className="flow-text">
                Find all your favorite Animal Crossing songs or background
                tracks below:
              </p>
            </div>

            {/* <div className="allCreaturesView"> */}
            {/* KK Songs */}
            {/* <div className="fishView">
                  <div className="fishTitle">
                    <Link to="/music/kk-songs">
                      <p>All K.K. Slider Songs</p>
                    </Link>
                  </div>
                  <div className="fishImg">
                    <a href="/music/kk-songs">
                      <img
                        src="https://i1.pngguru.com/preview/966/197/267/k-k-slider-cartoon-character-illustration-png-clipart.jpg"
                        className="img"
                        height="300px"
                        width="300px"
                        float="left"
                        object-fit="cover"
                      />
                    </a>
                  </div>
                </div>
   */}
            {/* Bug View */}
            {/* <div className="bugView">
                  <div className="bugTitle">
                    <Link to="/creatures/bugs">
                      <p>All Bugs</p>
                    </Link>
                  </div>
                  <div className="bugImg">
                    <a href="/creatures/bugs">
                      <img
                        src="https://dodo.ac/np/images/thumb/f/f1/Emperor_Butterfly_NH.png/180px-Emperor_Butterfly_NH.png"
                        className="img"
                        height="300px"
                        width="300px"
                        float="left"
                        object-fit="cover"
                      />
                    </a>
                  </div>
                </div> */}
          </div>
          {/* </div> */}
        </Route>
        {/* <Route path="/music/kk-songs">
            <AllSongs />
          </Route> */}
        {/* <Route path="/creatures/bugs">
            <AllBugs />
          </Route> */}
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    music: state.productReducer.AllMusic
  }
}

const mapDispatch = dispatch => {
  return {
    getMusic: () => dispatch(fetchMusic())
  }
}

export default connect(mapState, mapDispatch)(AllMusic)
