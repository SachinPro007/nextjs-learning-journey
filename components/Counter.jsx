"use client"

import React, { useState } from 'react'

function Counter() {
  const [value, setValue] = useState(0)
  return (
    <>
      <div className='text-2xl'>Value: {value}</div>
      <button
        className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        onClick={() => setValue(value => value + 1)}
      >
        Click Me
      </button>
    </>
    
  )
}

export default Counter