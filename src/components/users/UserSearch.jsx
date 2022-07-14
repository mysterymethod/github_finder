import { useState, useContext } from 'react'
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {

  const [text, setText] = useState('')
  const {users} = useContext(GithubContext)

  const changeHandler = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (text === '') {
      alert('Please write something is the search box.')
    } else {
      //@todo - search user
      setText('')
    }
  }

  return (
    <div className='search'>
      <form action="" onSubmit={handleSubmit} className='search__form'>
        <input
          type="text"
          placeholder='Search'
          className='search__input'
          onChange={changeHandler}
        />
        <button className='search__button' type='submit'>GO</button>
      </form>
      {users.length > 0 && <button className='clear-button'>clear</button>}
      
    </div>
  )
}

export default UserSearch