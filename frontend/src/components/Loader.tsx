import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center my-72'>
        <div className='h-16 w-16 rounded-full border-4 border-neutral-200 border-t-neutral-500 animate-spin'>
        </div>
    </div>
  )
}

export default Loader