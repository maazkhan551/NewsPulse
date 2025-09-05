import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
    return (
      <div className='ml-[100px] md:ml-[600px]'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner
