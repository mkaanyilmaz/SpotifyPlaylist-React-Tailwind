import React, { Component } from 'react'

export default class TopTitle extends Component {
  render() {
    return (
      <div className='w-full h-12 bg-title-color'>
        <div className='w-full py-1 px-20'>
          <p className='text-base font-nunito leading-normal normal-case text-white'>{this.props.title}</p>
        </div>
      </div>
    )
  }
}
