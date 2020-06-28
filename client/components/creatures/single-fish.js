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

    return (
      <div>
        <div className="row">
          <div className="bug-visual">
            <div className="bug-name">
              {fish && fish.name && fish.name['name-USen']}
            </div>
            <div className="bug-img" key={fish.id}>
              <img src={fish.image_uri} />
            </div>
          </div>

          <div className="bug-info">
            <div className="container">
              <div className="seasonality-container">
                <div className="stylized-title">Seasonality</div>
                <div>
                  <button className="hemisphere-button">Northern</button>
                  <button className="hemisphere-button">Southern</button>
                </div>
              </div>

              <div className="all-month-container">
                <div className="single-month-container">
                  <div>Jan.</div>
                </div>
                <div className="single-month-container">
                  <div>Feb.</div>
                </div>
                <div className="single-month-container">
                  <div>Mar.</div>
                </div>
                <div className="single-month-container">
                  <div>Apr.</div>
                </div>
                <div className="single-month-container">
                  <div>May.</div>
                </div>
                <div className="single-month-container">
                  <div>Jun.</div>
                </div>
                <div className="single-month-container">
                  <div>Jul.</div>
                </div>
                <div className="single-month-container">
                  <div>Aug.</div>
                </div>
                <div className="single-month-container">
                  <div>Sep.</div>
                </div>
                <div className="single-month-container">
                  <div>Oct.</div>
                </div>
                <div className="single-month-container">
                  <div>Nov.</div>
                </div>
                <div className="single-month-container">
                  <div>Dec.</div>
                </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">
                    Months Available in N. hemisphere:{' '}
                  </div>
                  <div className="stylized-text-content">
                    {fish &&
                      fish.availability &&
                      monthConverter(
                        fish.availability['month-array-northern'][0]
                      )}{' '}
                    to{' '}
                    {fish &&
                      fish.availability &&
                      monthConverter(
                        fish.availability['month-array-northern'][
                          fish.availability['month-array-northern'].length - 1
                        ]
                      )}
                  </div>
                </div>
              </div>

              <div className="smaller-info-container">
                <div className="stylized-title">
                  Months Available in S. hemisphere:{' '}
                </div>
                <div className="stylized-text-content">
                  {fish &&
                    fish.availability &&
                    monthConverter(
                      fish.availability['month-array-southern'][0]
                    )}{' '}
                  to{' '}
                  {fish &&
                    fish.availability &&
                    monthConverter(
                      fish.availability['month-array-southern'][
                        fish.availability['month-array-southern'].length - 1
                      ]
                    )}
                </div>
              </div>
            </div>

            <div className="hours-container">
              <div className="active-hours-container">
                <div className="stylized-title">Current Active Hours:</div>
              </div>

              <div className="time-to-catch-container">
                <div className="am-pm-container">AM</div>
                <div className="am-pm-container">PM</div>
              </div>

              <div className="six-hour-spread-container">
                <div className="six-hour-container">12</div>
                <div className="six-hour-container">6</div>
                <div className="six-hour-container">12</div>
                <div className="six-hour-container">6</div>
              </div>

              <div className="hour-timeline-container">
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
                <div className="indiv-hour-container">|_</div>
              </div>
            </div>

            <div className="larger-info-container">
              <div className="smaller-info-container">
                <div className="stylized-title">Hours Available: </div>
                <div className="stylized-text-content">
                  {fish && fish.availability && fish.availability.time}
                </div>
              </div>

              <div className="smaller-info-container">
                <div className="stylized-title">Shadow Size: </div>
                <div className="stylized-text-content">{fish.shadow}</div>
              </div>
            </div>

            <div className="larger-info-container">
              <div className="smaller-info-container">
                <div className="stylized-title">Location:</div>
                <div className="stylized-text-content">
                  {fish && fish.availability && fish.availability.location}
                </div>
              </div>
              <div className="smaller-info-container">
                <div className="stylized-title">Rarity:</div>
                <div className="stylized-text-content">
                  {fish && fish.availability && fish.availability.rarity}
                </div>
              </div>
            </div>

            <div className="larger-info-container">
              <div className="smaller-info-container">
                <div className="stylized-title">Reg. Price: </div>
                <div className="stylized-text-content">{fish.price} bells</div>
              </div>
              <div className="smaller-info-container">
                <div className="stylized-title">C.J.'s Price: </div>
                <div className="stylized-text-content">
                  {fish['price-cj']} bells
                </div>
              </div>
            </div>

            <div className="larger-info-container">
              <div className="smaller-info-container">
                <div className="stylized-title">Catchphrase: </div>
                <div className="stylized-text-content">
                  {fish['catch-phrase']}
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
    fish: state.fishReducer.singleFish
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleFish: fishId => dispatch(fetchSingleFish(fishId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleFish))
