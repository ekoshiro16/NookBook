import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {fetchVillagers} from '../../store/villager'

class AllVillagers extends React.Component {
  componentDidMount() {
    this.props.getVillagers()
  }

  render() {
    const villagers = Object.entries(this.props.villagers)
    console.log(villagers)
    console.log(this.props)
    return (
      <Switch>
        <Route exact path="/villagers">
          <div className="container">
            <div className="row">
              <p className="flow-text">
                Find all your favorite villagers below! (Organized by species)
              </p>
            </div>

            <div className="row">
              {villagers
                ? villagers.map(([key, villager]) => {
                    return (
                      <div className="col s3" key={villager.id}>
                        <div className="villager-title">
                          {villager &&
                            villager.name &&
                            villager.name['name-USen']}
                        </div>

                        <a
                          href={`/villagers/${villager.id}`}
                          title={
                            villager &&
                            villager.name &&
                            villager.name['name-USen']
                          }
                        >
                          <img src={villager.image_uri} className="music-img" />
                        </a>
                      </div>
                    )
                  })
                : 'LOADING...'}
            </div>
          </div>
          {/* </div> */}
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    villagers: state.villagerReducer.allVillagers
  }
}

const mapDispatch = dispatch => {
  return {
    getVillagers: () => dispatch(fetchVillagers())
  }
}

export default connect(mapState, mapDispatch)(AllVillagers)
