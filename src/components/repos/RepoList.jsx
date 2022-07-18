import { useContext } from "react"
import RepoItems from "./RepoItems"

import GithubContext from "../../context/github/GithubContext"

function RepoList() {

  const { repos } = useContext(GithubContext)

  return (
    <div className="repo-box">
      <h1 className="repo-box__heading">top repositories</h1>
      {repos.map((repo, i) =>
        <RepoItems
          key={i}
          repo={repo}
        />)
      }
    </div>
  )
}

export default RepoList