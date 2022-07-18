import { useContext, useEffect } from "react"
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { useParams, Link } from "react-router-dom"
import GithubContext from "../../context/github/GithubContext"

function User() {

  const { user, searchUser } = useContext(GithubContext)

  const params = useParams()

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    following,
    public_repos,
    public_gists,
    hireable,
    followers
  } = user

  useEffect(() => {
    // console.log(typeof user, user);
    searchUser(params.login)
  }, [])


  return (
    <>
      <div className="user">
        <div className="user__img-side">

          <img src={avatar_url} className='user__img' alt="" />
          <Link to='/' className="user__link">back to search</Link>


        </div>
        <div className="user__detail-side">
          <h2 className="user__name">{name}</h2>
          <span className="user__status">user</span>
          {hireable && <span className="user__hireable">Hireable</span>}
          <p className="user__bio">{bio}</p>
          <div>
            <a href={`https://github.com/${login}`} className="user__githubURL" target="_blank">visit github profile</a></div>
          {location && <div className="user__location">
            <span className="user__location__title">location</span>
            <h3 className="user__location__data">{location}</h3>
          </div>}
          {blog && <div className="user__website">
            <span className="user__website__title">website</span>
            <h3 className="user__website__data">{blog}</h3>
          </div>}
        </div>


      </div>

     {/* MORE USER DETAIL */}

      <div className="card">
        <div className="card__details">
          <p>followers</p>
          <strong className="card__followers">{followers}</strong>
        </div>
        <div className="card__logo">
          <FaUsers size={35} color={"pink"} />
        </div>
      </div>

      <div className="card">
        <div className="card__details">
          <p>followers</p>
          <strong className="card__followers">{followers}</strong>
        </div>
        <div className="card__logo">
          <FaUsers size={35} color={"pink"} />
        </div>
      </div>

      <div className="card">
        <div className="card__details">
          <p>followers</p>
          <strong className="card__followers">{followers}</strong>
        </div>
        <div className="card__logo">
          <FaUsers size={35} color={"pink"} />
        </div>
      </div>

      <div className="card">
        <div className="card__details">
          <p>followers</p>
          <strong className="card__followers">{followers}</strong>
        </div>
        <div className="card__logo">
          <FaUsers size={35} color={"pink"} />
        </div>
      </div>

      
    </>
  )
}

export default User