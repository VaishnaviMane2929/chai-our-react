import React, { useEffect } from 'react'

function Github() {
  const [data, setData] = useEffect([])
  useEffect(() => {
    fetch('https://github.com/VaishnaviMane2929')
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      
    })
  
  }, [])
  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-3xl'>Github Followers:</div>
  )
}

export default Github