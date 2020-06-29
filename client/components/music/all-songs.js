import React from 'react'
import {Link} from 'react-router-dom'
import {fetchSongs} from '../../store/song'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

export class AllSongs extends React.Component {
  componentDidMount() {
    console.log('blah')
    this.props.getSongs()
  }

  render() {
    // const songs = this.props
    // console.log(songs)
    console.log(this.props)

    const songs = Object.entries(this.props.songs)
    return (
      <Switch>
        <Route exact path="/music/kk-songs">
          <div>hi</div>
          <div className="container">
            <div className="row">
              <p className="flow-text">All K.K. Slider Songs</p>
            </div>
            <div className="row">
              {songs
                ? songs.map(([key, song]) => {
                    return (
                      <div className="col s2" key={song.id}>
                        <a href={`/music/kk-songs/${song.id}`}>
                          <img src={song.image_uri} className="music-img" />
                        </a>
                      </div>
                    )
                  })
                : 'LOADING...'}
            </div>
          </div>
        </Route>

        <Route path="/music/kk-songs/:id">
          <div>
            <p>hello world!</p>
          </div>
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  console.log('hello world')
  console.log(state)
  return {
    songs: state.songReducer.allSongs
  }
}

const mapDispatch = dispatch => {
  return {
    getSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mapState, mapDispatch)(AllSongs)
