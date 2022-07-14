import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({ key, username, avatar }) {
  return (
    <div className='user-grid__box'>
      <img src={avatar} className='card-img' alt="" />
      <div className="card-details">
        <h3 className='card-heading'>{username}</h3>
        <Link className='card-link' to='/'>Visit Profile</Link>
      </div>

    </div>
  )
}

export default UserItem