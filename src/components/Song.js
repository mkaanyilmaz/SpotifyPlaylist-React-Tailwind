import React, { Component } from 'react'

export default class Song extends Component {
  render() {
    return (
      <>
      <div className='grid grid-cols-6 pt-6'>
        <div className='h-14 bg-playlistBg'>
          <img width={56} height={24} className='max-w-full max-h-full' src={this.props.track?.imageSrc}></img>
        </div>
        <div className='col-span-4 bg-playlistBg'>
          <div className='grid-row-2 mt-1'>
            <div className='bg-blackplaylistBg text-green-400'>
              {this.props.track?.album}
            </div>
            <div className='bg-playlistBg text-sm text-gray-400'>
              <span className=' bg-gray-400 text-xs rounded-sm text-black mr-2 font-normal px-px'>LYRICS</span>
              {this.props.track?.artist}
            </div>
          </div>
        </div>
        <div className='bg-playlistBg flex justify-center py-4 pl-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </div>
      </div>
      </>
    )
  }
}
