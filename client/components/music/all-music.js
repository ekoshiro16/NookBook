import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AllSongs from './all-songs'
import AllBGMS from './all-bgms'
import {Route, Switch} from 'react-router-dom'

export class AllMusic extends React.Component {
  render() {
    console.log(this.props)
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

            <div className="all-critters-view">
              <div className="fishView">
                <div className="fishTitle">
                  <Link to="/music/kk-songs">
                    <p>All K.K. Slider Songs</p>
                  </Link>
                </div>
                <div className="fishImg">
                  <a href="/music/kk-songs">
                    <img
                      src="https://i.pinimg.com/originals/53/bc/92/53bc921f9491aa2619abe23c0d8d7019.png"
                      className="img"
                      height="300px"
                      width="300px"
                      float="left"
                      object-fit="cover"
                    />
                  </a>
                </div>
              </div>

              <div className="fishView">
                <div className="fishTitle">
                  <Link to="/music/background-music">
                    <p>All Animal Crossing Background Music</p>
                  </Link>
                </div>
                <div className="fishImg">
                  <a href="/music/background-music">
                    <img
                      src="https://ih1.redbubble.net/image.1037321112.8250/st,small,507x507-pad,600x600,f8f8f8.jpg"
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
        <Route path="/music/kk-songs">
          <AllSongs />
        </Route>
        <Route path="/music/background-music">
          <AllBGMS />
        </Route>
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
