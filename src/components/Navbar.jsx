import React from 'react'

function Navbar(props) {
  return (
    <div>
     
      <ul className="flex justify-around">
        <li>
    {props.brand}

        </li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
        <li>06</li>
        <li>07</li>
        <li>08</li>
      </ul>
    </div>
  )
}

export default Navbar
