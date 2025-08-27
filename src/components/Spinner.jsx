import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='fixed top-9 left-1/2'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
