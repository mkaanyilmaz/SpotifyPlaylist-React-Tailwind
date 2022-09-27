import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className='h-16 bg-playlistBg absolute bottom-0 left-0 right-0'>
        <div className='bg-footer-bg ml-6 w-[calc(100%-3rem)] h-full rounded-lg'>
          <div className='grid grid-cols-6'>
            <div className='pl-2 pt-2 h-14'>
              <img width={56} height={24} className='max-w-full max-h-full rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Edward_Lear_-_Greek_Woodcutter%2C_June_13_%2C_56_-_Google_Art_Project.jpg'></img>
            </div>
            <div className='col-span-4'>
              <div className='grid-row-2 mt-3 ml-2'>
                <div className='text-sm text-white'>
                  Hayloft
                </div>
                <div className='text-sm text-gray-400'>
                  Mother Mother
                </div>
              </div>
            </div>
            <div className='flex justify-center py-4'>
              <div className='grid grid-cols-4 gap-12 mr-36'>
                <div className='text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                </div>
                <div className='text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <div className='text-green-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <div className='text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
        </div>
        </div>
      </footer>
      </>
    )
  }
}
