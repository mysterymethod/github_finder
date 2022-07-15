import { useReducer, createContext } from 'react'
import alertReducer from './AlertReducers'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {

  //INITIAL STATE
  const initialState = null

  
  //SET ALERT
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => {
      return dispatch({
        type: 'REMOVE_ALERT'
      })
    }, 3000);
  }


  //REDUCER
  const [state, dispatch] = useReducer(alertReducer, initialState)

  return <AlertContext.Provider value={{
    alert: state,
    setAlert
  }}>

    {children}
  </AlertContext.Provider>
}














// import { useReducer, createContext } from 'react'
// import alertReducer from './alertReducers'

// const AlertContext = createContext()

// export const AlertProvider = ({ children }) => {

//   //INITIAL STATE
//   const initialState = {
    
//   }


//   //REDUCER
//   const [state, dispatch] = useReducer(alertReducer, initialState)

//   return <AlertContext.Provider value={{
//     // .........state
//     // users: state.users,
//     // loading: state.loading,
//     // .........function
//     // fetchUsers,
//     // searchUsers,
//     // clearUsers
//   }}>

//     {children}
//   </AlertContext.Provider>
// }


export default AlertContext