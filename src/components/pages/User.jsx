import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GithubContext from "../../context/github/GithubContext"

function User() {

  const {user, searchUser} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    // console.log(typeof user, user);
    searchUser(params.login)
  }, [])
  

  return (
    <div>{user.login}</div>
  )
}

export default User