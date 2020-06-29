import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleFossil} from '../store/fossil'
import M from 'materialize-css'
import {useParams} from 'react-router-dom'
import {withRouter} from 'react-router'

export class SingleFossil extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const fossily = this.props.match.params.id
    this.props.getSingleFossil(fossily)
  }

  render() {
    const fossil = this.props.fossil
    console.log('fossil', fossil)
    return (
      <div>
        <div className="row">
          <div className="bug-visual">
            <div className="bug-name">
              {fossil && fossil.name && fossil.name['name-USen']}
            </div>
            <div className="bug-img" key={fossil.id}>
              <img src={fossil.image_uri} />
            </div>
          </div>

          {/* <div className="bug-info">
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

                <div className="smaller-info-container">
                  <div className="stylized-title">Sell Price: </div>
                  <div className="stylized-text-content">
                    {song['sell-price']}
                  </div>
                </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">
                    Available via Nook Catalog?
                  </div>
                  <div className="stylized-text-content">
                    {song.isOrderable ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">Listen here: </div>
                  <audio controls src={song.music_uri} type="audio/mpeg" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    fossil: state.fossilReducer.singleFossil
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleFossil: fossilId => dispatch(fetchSingleFossil(fossilId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleFossil))
