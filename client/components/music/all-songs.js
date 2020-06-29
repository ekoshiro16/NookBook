import React from 'react'
import {Link} from 'react-router-dom'
import {fetchSongs} from '../../store/song'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import SingleSong from './single-song'

export class AllSongs extends React.Component {
  componentDidMount() {
    this.props.getSongs()
  }

  render() {
    console.log(this.props)

    const songs = Object.entries(this.props.songs)
    return (
      <Switch>
        <Route exact path="/music/kk-songs">
          <div className="container">
            <div className="row">
              <p className="flow-text">All K.K. Slider Songs</p>
            </div>
            <div className="row">
              {songs
                ? songs.map(([key, song]) => {
                    return (
                      <div className="col s3" key={song.id}>
                        <div className="stylixed-title">
                          {song.id}:{' '}
                          {song && song.name && song.name['name-USen']}
                        </div>

                        <a
                          href={`/music/kk-songs/${song.id}`}
                          title={song && song.name && song.name['name-USen']}
                        >
                          <img src={song.image_uri} className="music-img" />
                        </a>

                        <audio
                          controls
                          src={song.music_uri}
                          type="audio/mpeg"
                        />
                      </div>
                    )
                  })
                : 'LOADING...'}
            </div>
          </div>
        </Route>

        <Route path="/music/kk-songs/:id">
          <SingleSong />
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
