import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

// Create a react component called GridComponent, which takes
// in a prop as its x & y coordinate.

// Variables
// const table = document.getElementsByTagName('table')[0]
// const select = document.getElementsByTagName('select')[0]
// const button = document.getElementById('add-row')

// // Functions for event listeners
// function generateIsland(gridNum) {
//     console.log('did i run?')
//     for (let i = 0; i < gridNum; i++) {
//         <div className="row"></div>
//     }
// //   const row = document.createElement('tr')
// //   for (let i = 0; i < 80; i++) {
// //     const td = document.createElement('td')
// //     row.appendChild(td)
// //   }
// //   table.appendChild(row)
// }

// function colorize(event) {
//   const target = event.target
//   if (target.tagName !== 'TD') {
//     return
//   }
//   if (target.className === chosenColor) {
//     target.className = ''
//   } else {
//     target.className = chosenColor
//   }
// }

// function pickColor(event) {
//   chosenColor = event.target.value
// }

// function addMouseOver() {
//   table.addEventListener('mouseover', colorize)
// }

// function removeMouseOver() {
//   table.removeEventListener('mouseover', colorize)
// }

export default class IslandCreator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      boardHeight: 80,
      boardWidth: 80
    }
  }

  render() {
    return (
      <div>
        <table className="island-grid">
          <tbody />
        </table>
        <div>
          <h1>UNDER CONSTRUCTION </h1>
        </div>
      </div>
    )
  }
}
