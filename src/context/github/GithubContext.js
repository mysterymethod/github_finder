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



  //SEARCH USERS
  //URL - https://api.github.com/search/users?q=pranoy
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
    //console.log(data.items);

    dispatch({
      type: 'GET_USERS',
      payload: data.items
    })
  }


  //SEARCH SINGLE USER
  //url - https://api.github.com/users/pranoy
  const searchUser = async (username) => {

    setLoading(false)

    const Json = JSON.stringify(username)
    console.log(Json);
    //console.log(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`);
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      },
    })

    const data = await response.json()
    console.log(data);

    dispatch({
      type: 'GET_USER',
      payload: data
    })
  }

  //GET REPOS OF SELECTED USER
  //url - https://api.github.com/users/pranoy/repos
  const getRepos = async (username) => {

    setLoading(false)

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })

    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}/repos?${params}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      },
    })

    const data = await response.json()
    
    dispatch({
      type: 'GET_REPOS',
      payload: data
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
    getRepos,
    fetchUsers,
    searchUsers,
    searchUser,
    clearUsers,
    setUser
  }}>

    {children}
  </GithubContext.Provider>
}


export default GithubContext