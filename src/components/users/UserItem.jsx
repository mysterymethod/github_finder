import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserItem({ username, avatar }) {

  const { setUser } = useContext(GithubContext)

  return (
    <div className='user-grid__box'>
      <img src={avatar} className='card-img' alt="" />
      <div className="card-details">
        <h3 className='card-heading'>{username}</h3>
        <Link
          className='card-link'
          onClick={() => setUser(username)}
          to={`users/${username}` 
        }>Visit Profile</Link>
    </div>

    </div >
  )
}

export default UserItem