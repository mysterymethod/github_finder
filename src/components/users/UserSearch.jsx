import { useState, useContext } from 'react'


import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import UserResults from './UserResults'
import Alert from '../layouts/Alert'
import { searchUsers } from "../../context/github/GithubActions"

function UserSearch() {

  const [text, setText] = useState('')

  const { users, dispatch, clearUsers } = useContext(GithubContext)
  const { alert, setAlert } = useContext(AlertContext)

  const changeHandler = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (text === '') {
      setAlert('Please write something...', 'missing text')
    } else {

      dispatch({
        type: 'SET_LOADING',
        payload: false
      })

      const users = await searchUsers(text)

      dispatch({
        type: 'GET_USERS',
        payload: users
      })
      setText('')
    }
  }



  return (
    <div className='search'>

      <Alert />
      <form action="" onSubmit={handleSubmit} className='search__form'>
        <input
          type="text"
          placeholder='Search'
          className='search__input'
          onChange={changeHandler}
          value={text}
        />
        <button className='search__button' type='submit'>GO</button>
      </form>
      {users.length > 0 &&
        <>
          <button className='clear-button' onClick={clearUsers}>clear</button>
          <UserResults />
        </>
      }

    </div>
  )
}

export default UserSearch