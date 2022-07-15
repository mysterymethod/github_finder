import { useReducer, createContext } from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

  //INITIAL STATE
  const initialState = {
    users: [],
    loading: false
  }


  //REDUCER
  const [state, dispatch] = useReducer(githubReducer, initialState)



  //FETCHING RANDOM DATA - TESTING PURPOSE
  const fetchUsers = async () => {

    setLoading(false)

    //URL - https://api.github.com/search/users?q=pranoy
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      },
    })

    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data.items
    })
  }



  //SEARCH USER
  const searchUsers = async (text) => {

    setLoading(false)

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      },
    })

    const data = await response.json()
    console.log(data.items);

    dispatch({
      type: 'GET_USERS',
      payload: data.items
    })
  }



  //SET LOADING - TRUE/FALSE
  const setLoading = (value) => dispatch({
    type: 'SET_LOADING',
    payload: value
  })


  //CLEAR USERS FROM SCREEN
  const clearUsers = () => dispatch({
    type: 'CLEAR_USERS'
  })


  return <GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    fetchUsers,
    searchUsers,
    clearUsers
  }}>

    {children}
  </GithubContext.Provider>
}


export default GithubContext