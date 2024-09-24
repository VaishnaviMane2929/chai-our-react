import React from 'react'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
   <header/>
   <Layout/>

   <footer/>
    </>
  )
}

export default Layout