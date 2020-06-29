import React from 'react'
import {Link} from 'react-router-dom'
import {fetchBGMS} from '../../store/bgm'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// import SingleBGM from './single-bgm'

export class AllBGMS extends React.Component {
  componentDidMount() {
    console.log('blah')
    this.props.getBGMS()
  }

  render() {
    // const songs = this.props
    // console.log(songs)
    console.log(this.props)

    const bgms = Object.entries(this.props.bgms)
    return (
      <Switch>
        <Route exact path="/music/background-music">
          <div className="container">
            <div className="row">
              <p className="flow-text">
                All Animal Crossing Background Music:{' '}
              </p>
            </div>
            <div className="row">
              {bgms
                ? bgms.map(([key, bgm]) => {
                    return (
                      <div className="col s3" key={bgm.id}>
                        {/* DON'T FORGET TO ADD WHAT HOUR EACH MUSIC IS FOR USING A SWITCH FUNCTION */}
                        <div className="stylixed-title">
                          {bgm.id}: {bgm.weather}
                        </div>

                        <a
                          href={`/music/background-music/${bgm.id}`}
                          title={bgm.weather}
                        >
                          <img
                            src="https://ih1.redbubble.net/image.1037321112.8250/st,small,507x507-pad,600x600,f8f8f8.jpg"
                            className="music-img"
                          />
                        </a>

                        <audio
                          controls
                          src={bgm.music_uri}
                          type="audio/mpeg"
                        />
                      </div>
                    )
                  })
                : 'LOADING...'}
            </div>
          </div>
        </Route>

        {/* <Route path="/music/background-music/:id">
          <SingleSong />
        </Route> */}
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    bgms: state.bgmReducer.allBGMS
  }
}

const mapDispatch = dispatch => {
  return {
    getBGMS: () => dispatch(fetchBGMS())
  }
}

export default connect(mapState, mapDispatch)(AllBGMS)
