import React from 'react'
import {connect} from 'react-redux'
import {fetchBugs} from '../../store/bug'

export class AllBugs extends React.Component {
  componentDidMount() {
    this.props.getBugs()
  }

  render() {
    const bugs = this.props.bugs
    return (
      <div className="container">
        <div className="row">
          <p className="flow-text">Bugs (Critterpedia View)</p>
        </div>
        <div className="column">
          {/* Common Butterfly */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/1"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Paper Kite Butterfly */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/6"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Rajah Brooke's birdwing */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/11"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Long locust */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/16"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Bell cricket */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/21"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Brown cicada */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/26"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Cicada shell */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/31"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Firefly */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/36"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Stingbug */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/41"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Violin beetle */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/46"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Earth-boring dung beetle */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/51"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Miyama stag */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/56"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Giraffe stag */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/61"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Walking stick */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/66"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Wharf roach */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/71"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Pill bug */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/76"
            className="responsive-img"
            height="75px"
            width="75px"
          />
        </div>
        <div className="column">
          <img
            src="https://acnhapi.com/v1/icons/bugs/1"
            className="responsive-img"
            height="75px"
            width="75px"
          />

          {/* Yellow Butterfly */}
          <img
            src="https://acnhapi.com/v1/icons/bugs/2"
            className="responsive-img"
            height="75px"
            width="75px"
          />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    bugs: state.bugReducer.allBugs
  }
}

const mapDispatch = dispatch => {
  return {
    getBugs: () => dispatch(fetchBugs())
  }
}

export default connect(mapState, mapDispatch)(AllBugs)
