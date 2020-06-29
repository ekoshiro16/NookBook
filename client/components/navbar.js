import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <div className="navbar-fixed">
        {/* The navbar will show these links after you log in */}
        <nav>
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo center">
              🌱 NookBook 🌱
            </a>

            <form>
              <label htmlFor="search">Search by name: </label>
              <input type="text" />
            </form>

            <ul className="left hide-on-med-and-down">
              <li>
                <a href="/creatures">🐙 Creatures</a>
              </li>
              <li>
                <a href="/fossils">🦕 Fossils</a>
              </li>
              <li>
                <a href="/exclusive">✨Premium Members</a>
              </li>
              <li>
                <a href="/music">🎶 Music</a>
              </li>
              <li>
                <a href="/villagers">🦥 Villagers</a>
              </li>
              <li>
                <a href="/art">🎨 Art</a>
              </li>
              <li>
                <a href="furniture">🛏️ Furniture</a>
              </li>
              <li>
                <a href="fashion">👗 Fashion</a>
              </li>
              <li>
                <a href="guides">📝 User Guides</a>
              </li>
              <li>
                <a href="/island-creator">🏝️ Island Creator</a>
              </li>
              <li>
                <a href="turnip-calculator">🧄 Turnip Calculator</a>
              </li>
              <li>
                <a href="user-submissions">👥 Submissions</a>
              </li>
              <li>
                <a href="forums">🗣️ Forums</a>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/home">
                  <i className="material-icons">account_circle</i>
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    ) : (
      <div className="navbar-fixed">
        {/* The navbar will show these links before you log in */}
        <nav>
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo center">
              🌱 NookBook 🌱
            </a>
            <form />
          </div>
          <nav className="secondary-navbar">
            <ul className="left hide-on-med-and-down">
              <li>
                <a href="/creatures">🐙 Creatures</a>
              </li>
              <li>
                <a href="/fossils">🦕 Fossils</a>
              </li>
              <li>
                <a href="/music">🎶 Music</a>
              </li>
              <li>
                <a href="/villagers">🦥 Villagers</a>
              </li>
              <li>
                <a href="/art">🎨 Art</a>
              </li>
              <li>
                <a href="furniture">🛏️ Furniture</a>
              </li>
              <li>
                <a href="fashion">👗 Fashion</a>
              </li>
              <li>
                <a href="guides">📝 Guides</a>
              </li>
              <li>
                <a href="/island-creator">️🏝️ Island Creator</a>
              </li>
              <li>
                <a href="turnip-calculator">🧄 Turnip Calculator</a>
              </li>
              <li>
                <a href="user-submissions">👥 Submissions</a>
              </li>
              <li>
                <a href="forums">🗣️ Forums</a>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/login">🔑 Login</a>
              </li>
              <li>
                <a href="/signup">👋 Sign Up</a>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
