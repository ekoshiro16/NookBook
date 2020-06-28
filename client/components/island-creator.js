import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

// Variables
const table = document.getElementsByTagName('table')[0]
const select = document.getElementsByTagName('select')[0]
const button = document.getElementById('add-row')

// Functions for event listeners
function generateIsland() {
  const row = document.createElement('tr')
  for (let i = 0; i < 80; i++) {
    const td = document.createElement('td')
    row.appendChild(td)
  }
  table.appendChild(row)
}

function colorize(event) {
  const target = event.target
  if (target.tagName !== 'TD') {
    return
  }
  if (target.className === chosenColor) {
    target.className = ''
  } else {
    target.className = chosenColor
  }
}

function pickColor(event) {
  chosenColor = event.target.value
}

function addMouseOver() {
  table.addEventListener('mouseover', colorize)
}

function removeMouseOver() {
  table.removeEventListener('mouseover', colorize)
}

export default class IslandCreator extends React.Component {
  render() {
    console.log('hi')
    return (
      <div>
        <div>
          <button id="add-row">Add a row</button>
          <select>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <table />
      </div>
    )
  }
}
