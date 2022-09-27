import React, { Component } from 'react'
import Song from './Song'

export default class Playlist extends Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className='w-full h-[calc(100%-7rem)] bg-playlistBg overflow-auto'>
          <div className='text-white px-6'>
            {
              this.props.trackList.map(item => <Song track={item}/>)
            }
            <Song/>
          </div>
        </div>
    )
  }
}
