import React from 'react'
import {connect} from 'react-redux'
import {fetchFish} from '../../store/fish'
import {Route, Switch, Link} from 'react-router-dom'
import SingleFish from './single-fish'

export class AllFish extends React.Component {
  componentDidMount() {
    this.props.getFish()
  }

  render() {
    console.log(this.props)
    const fishy = Object.entries(this.props.fish)

    return (
      <Switch>
        <Route exact path="/creatures/fish">
          <div className="container">
            <div className="row">
              <p className="flow-text">Fish (Critterpedia View)</p>
            </div>
            <div className="row">
              {fishy
                ? fishy.map(([key, fish]) => {
                    return (
                      <div className="col s1" key={fish.id}>
                        <a href={`/creatures/fish/${fish.id}`}>
                          <img src={fish.icon_uri} className="responsive-img" />
                        </a>
                      </div>
                    )
                  })
                : 'LOADING...'}
            </div>
          </div>
        </Route>
        <Route path="/creatures/fish/:id">
          <SingleFish />
        </Route>
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    fish: state.fishReducer.allFish
  }
}

const mapDispatch = dispatch => {
  return {
    getFish: () => dispatch(fetchFish())
  }
}

export default connect(mapState, mapDispatch)(AllFish)
