import { useContext, useEffect } from 'react'

import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

import GithubContext from "../../context/github/GithubContext"

function UserResults() {
  
  const {users, loading, fetchUsers} = useContext(GithubContext)

  // useEffect(() => {
  //   fetchUsers()
  // }, [])


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