import React from 'react'
import {connect} from 'react-redux'
import {fetchFossils} from '../store/fossil'
import {Route, Switch, Link} from 'react-router-dom'
// import SingleFossil from './single-fossil'

export class AllFossils extends React.Component {
  // componentDidMount() {
  //     this.props.getFossils()
  // }

  render() {
    console.log('props', this.props)
    console.log('this', this)

    // const fossils = Object.entries(this.props.fossils)

    return (
      <Switch>
        <Route exact path="/fossils">
          <div className="container">
            <div className="row">
              <p className="flow-text">Fossils A-Z</p>
            </div>

            {/* <div className="row">
                            {fossils
                                ? fossils.map(([key, fossil]) => {
                                    return (
                                        <div className="col s3" key={fossil.id}>
                                            <div className="stylixed-title">
                                                {fossil.id}:{' '}
                                                {fossil && fossil.name && fossil.name['name-USen']}
                                            </div>

                                            <a
                                                href={`/fossils/${fossil.id}`}
                                                title={fossil && fossil.name && fossil.name['name-USen']}
                                            >
                                                <img src={fossil.image_uri} className="music-img" />
                                            </a>
                                        </div>
                                    )
                                })
                                : 'LOADING...'}
                        </div> */}
          </div>
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    fossils: state.fossilReducer.AllFossils
  }
}

const mapDispatch = dispatch => {
  return {
    getFossils: () => dispatch(fetchFossils())
  }
}

export default connect(mapState, mapDispatch)(AllFossils)
