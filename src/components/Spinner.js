import React, { Component } from 'react'
import Loading from './Loading.gif'

export class spinner extends Component {
  render() {
    return (
        <div>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
}

export default spinner