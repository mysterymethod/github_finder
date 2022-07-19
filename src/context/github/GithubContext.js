import { useReducer, createContext } from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

  //INITIAL STATE
  const initialState = {
    users: [],
    user:{},
    repos:[],
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



  //SET USER
  const setUser = (user) => {
    // console.log(user);
    dispatch({
      type: 'SET_USER',
      payload: user
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
    user: state.user,
    loading: state.loading,
    repos: state.repos,
    dispatch,
    fetchUsers,
    clearUsers,
    setUser
  }}>

    {children}
  </GithubContext.Provider>
}


export default GithubContext