import React from 'react'
import './style.css'
// eslint-disable-next-line react/prop-types
const HolyGrail = ({disp}) => {
  return (
    <>
      <header >Header</header>
      <div className="main_container">
        <nav>Navigation
          <button onClick={()=>disp(prev=>!prev)}>back</button>
        </nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  )
}

export default HolyGrail