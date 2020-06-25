import React from 'react'
import {connect} from 'react-redux'

export class AllCreatures extends React.Component {
  // componentDidMount() {
  //   this.props.getCreatures()
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <p className="flow-text">
            Look up creature data based on type below!
          </p>
        </div>

        <div className="allCreaturesView">
          {/* Fish View */}
          <div className="fishView">
            <div className="fishTitle">
              <a href="/creatures/fish">All Fish</a>
            </div>
            <div className="fishImg">
              <a href="/creatures/fish">
                <img
                  src="https://dodo.ac/np/images/4/4b/Black_Bass_NH.png"
                  className="responsive-img"
                  height="400px"
                  width="400px"
                  float="left"
                  object-fit="cover"
                />
              </a>
            </div>
          </div>

          {/* Bug View */}
          <div className="bugView">
            <div className="bugTitle">
              <a href="/creatures/bugs">All Bugs</a>
            </div>
            <div className="bugImg">
              <a href="/creatures/bugs">
                <img
                  src="https://dodo.ac/np/images/thumb/f/f1/Emperor_Butterfly_NH.png/180px-Emperor_Butterfly_NH.png"
                  className="responsive-img"
                  height="400px"
                  width="400px"
                  float="left"
                  object-fit="cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.productReducer.AllCreatures
  }
}

const mapDispatch = dispatch => {
  return {
    getCreatures: () => dispatch(fetchCreatures())
  }
}

export default connect(mapState, mapDispatch)(AllCreatures)
