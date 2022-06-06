import React from 'react'
import "./navbar.scss"

const NavBar = (props) => {
  return (
    <div>
        <input type="text" className='input' value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Search For A Movie" />
    </div>
  )
}

export default NavBar