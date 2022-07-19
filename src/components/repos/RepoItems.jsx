import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItems({ repo }) {

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <>

      <div className='repo-item'>
        <FaLink />
        <h3 className='repo-item__heading'>{name}</h3>

        <div className='repo-item__detail'>
          <div className='repo-item__detail__eye highlight-box'>
            <FaEye />
            <span className='margin-left'>{watchers_count} </span>
          </div>
          <div className='repo-item__detail__star highlight-box'>
            <FaStar />
            <span className='margin-left'>{stargazers_count} </span>
          </div>
          <div className='repo-item__detail__info highlight-box'>
            <FaInfo />
            <span className="margin-left">
              {open_issues}
            </span>
          </div>
          <div className='repo-item__detail__utensils highlight-box'>
            <FaUtensils />
            <span className="margin-left">{forks}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default RepoItems