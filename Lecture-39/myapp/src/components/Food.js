import React from 'react'

const Food = (props) => {
  return (
    <li>
        <strong>{props.burger.name}</strong>
        <p>{props.burger.price}</p>
        <p>{props.burger.rating }</p>
    </li>
  )
}

export default Food