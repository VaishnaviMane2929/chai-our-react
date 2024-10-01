import React, { useEffect } from 'react'

function Github() {
  useEffect(() => {
    fetch('https://github.com/VaishnaviMane2929')
  })
  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-3xl'>Github Followers:</div>
  )
}

export default Github