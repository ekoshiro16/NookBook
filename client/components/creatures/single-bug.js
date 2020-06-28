import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBug} from '../../store/bug'
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

export class SingleBug extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const buggy = this.props.match.params.id
    this.props.getSingleBug(buggy)
  }

  render() {
    const bug = this.props.bug
    console.log('bugggggggg', bug)
    if (bug.name) {
      console.log('bug name', bug.name['name-USen'])
    }
    return (
      <div>
        <div className="row">
          <div className="bug-visual">
            <div className="bug-name">
              {bug && bug.name && bug.name['name-USen']}
            </div>
            <div className="bug-img" key={bug.id}>
              <img src={bug.image_uri} />
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
                    {bug &&
                      bug.availability &&
                      monthConverter(
                        bug.availability['month-array-northern'][0]
                      )}{' '}
                    to{' '}
                    {bug &&
                      bug.availability &&
                      monthConverter(
                        bug.availability['month-array-northern'][
                          bug.availability['month-array-northern'].length - 1
                        ]
                      )}
                  </div>
                </div>

                <div className="smaller-info-container">
                  <div className="stylized-title">
                    Months Available in S. hemisphere:{' '}
                  </div>
                  <div className="stylized-text-content">
                    {bug &&
                      bug.availability &&
                      monthConverter(
                        bug.availability['month-array-southern'][0]
                      )}{' '}
                    to{' '}
                    {bug &&
                      bug.availability &&
                      monthConverter(
                        bug.availability['month-array-southern'][
                          bug.availability['month-array-southern'].length - 1
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
                    {bug && bug.availability && bug.availability.time}
                  </div>
                </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">Location:</div>
                  <div className="stylized-text-content">
                    {bug && bug.availability && bug.availability.location}
                  </div>
                </div>
                <div className="smaller-info-container">
                  <div className="stylized-title">Rarity:</div>
                  <div className="stylized-text-content">
                    {bug && bug.availability && bug.availability.rarity}
                  </div>
                </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">Reg. Price: </div>
                  <div className="stylized-text-content">{bug.price} bells</div>
                </div>
                <div className="smaller-info-container">
                  <div className="stylized-title">Flick's Price: </div>
                  <div className="stylized-text-content">
                    {bug['price-flick']} bells
                  </div>
                </div>
              </div>

              <div className="larger-info-container">
                <div className="smaller-info-container">
                  <div className="stylized-title">Catchphrase: </div>
                  <div className="stylized-text-content">
                    {bug['catch-phrase']}
                  </div>
                </div>
              </div>

              {/* <div className="larger-info-container">
                                <div className="smaller-info-container">
                                    <div className="stylized-title">Blather's Hot MuseumTake: </div>
                                    <div className="stylized-text-content">{bug['catch-phrase']}</div>
                                </div>
                            </div> */}
            </div>
          </div>

          {/* <h4 className="title">{bug && bug.name && bug.name['name-USen']}</h4> */}
          {/* <div key={bug.id}>
                        <img src={bug.image_uri} width="200" height="200" />
                    </div> */}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    bug: state.bugReducer.singleBug
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleBug: bugId => dispatch(fetchSingleBug(bugId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleBug))
