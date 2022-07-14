import React from 'react'

function UserItem({key, username}) {
  return (
    <div className='user-grid__box'>{username}</div>
  )
}

export default UserItem