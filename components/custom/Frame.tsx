import React from 'react'

const Frame = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full border-2 border-primary'>
      <div className='bg-blue-600 h-full w-full flex flex-col justify-center items-center p-8'>
        <div className='bg-blue-400 h-full w-full flex flex-col justify-center items-center p-4'>
          <div className='bg-background h-full w-full flex flex-col justify-center items-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame