import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleSong} from '../../store/song'
import M from 'materialize-css'
import {useParams} from 'react-router-dom'
import {withRouter} from 'react-router'

export class SingleSong extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const songy = this.props.match.params.id
    this.props.getSingleSong(songy)
  }

  render() {
    const song = this.props.song
    console.log('songggggg', song)
    if (song.name) {
      console.log('song name', song.name['name-USen'])
    }
    return (
      <div>
        <div className="row">
          <div className="bug-visual">
            <div className="bug-name">
              {song && song.name && song.name['name-USen']}
            </div>
            <div className="bug-img" key={song.id}>
              <img src={song.image_uri} />
            </div>
          </div>

          <div className="bug-info">
            <div className="container">
              <div className="larger-info-container">
                <div className="stylized-title">Song Info: </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">Buy Price: </div>
                  <div className="stylized-text-content">
                    {song['buy-price']}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    song: state.songReducer.singleSong
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleSong: songId => dispatch(fetchSingleSong(songId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleSong))
