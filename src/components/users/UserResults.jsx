import { useEffect, useState } from 'react'

import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

function UserResults() {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
    //console.log('running fetch users');
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      },
    })

    const data = await response.json()
    setUsers(data)
    console.log(data);
    setLoading(false)
  }


  if (!loading) {
    return (
      <div className='user-grid'>
        {users.map((user, index) => {
          return (
            <UserItem 
              key={index}
              username={user.login} 
              avatar={user.avatar_url}
            />
          )
        })}
      </div>)
  }
  return (
    <>
      <Spinner />
    </>

  )
}



export default UserResults