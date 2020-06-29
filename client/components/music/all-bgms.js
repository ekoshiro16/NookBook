import React from 'react'
import {Link} from 'react-router-dom'
import {fetchBGMS} from '../../store/bgm'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
// import SingleBGM from './single-bgm'

function hourConvertor(numericHour) {
  switch (numericHour) {
    case 0:
      return 'midnight'
    case 1:
      return '1:00 am'
    case 2:
      return '2:00 am'
    case 3:
      return '3:00 am'
    case 4:
      return '4:00 am'
    case 5:
      return '5:00 am'
    case 6:
      return '6:00 am'
    case 7:
      return '7:00 am'
    case 8:
      return '8:00 am'
    case 9:
      return '9:00 am'
    case 10:
      return '10:00 am'
    case 11:
      return '11:00 am'
    case 12:
      return 'noon'
    case 13:
      return '1:00 pm'
    case 14:
      return '2:00 pm'
    case 15:
      return '3:00 pm'
    case 16:
      return '4:00 pm'
    case 17:
      return '5:00 pm'
    case 18:
      return '6:00 pm'
    case 19:
      return '7:00 pm'
    case 20:
      return '8:00 pm'
    case 21:
      return '9:00 pm'
    case 22:
      return '10:00 pm'
    case 23:
      return '11:00 pm'
  }
}

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
                          {bgm.id}: {bgm.weather} at {hourConvertor(bgm.hour)}
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

                        <audio controls src={bgm.music_uri} type="audio/mpeg" />
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
