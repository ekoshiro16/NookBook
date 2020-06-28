import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleFish} from '../../store/fish'
import M from 'materialize-css'
import {useParams} from 'react-router-dom'
import {withRouter} from 'react-router'

function monthConverter(numericMonth) {
  switch (numericMonth) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
    default:
      console.log('Sorry, this is not a valid numeric month.')
  }
}

export class SingleFish extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const fishy = this.props.match.params.id
    this.props.getSingleFish(fishy)
  }

  render() {
    const fish = this.props.fish
    console.log('fishhhhh', fish)
    if (fish.name) {
      console.log('fish name', fish.name['name-USen'])
    }

    return <div />
  }
}

const mapState = state => {
  return {
    bug: state.fishReducer.singleFish
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleFish: fishId => dispatch(fetchSingleFish(fishId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleFish))
