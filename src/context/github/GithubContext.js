import { useReducer, createContext } from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

  //INITIAL STATE
  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //FETCHING DATA
  const fetchUsers = async () => {

    setLoading(false)

    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      },
    })

    const data = await response.json()
    
    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  //SET LOADING - TRUE/FALSE
  const setLoading = (value) => dispatch({
    type: 'SET_LOADING',
    payload: value
  })


  return <GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    fetchUsers
  }}>

    {children}
  </GithubContext.Provider>
}


export default GithubContext