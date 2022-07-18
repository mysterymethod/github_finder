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

        <div className='repos-item__detail'>
          <div className='repos-item__detail__eye'>
            <FaEye />
            <span>{forks} </span>
          </div>
          <div className='repos-item__detail__star'>
            <FaStar />
          </div>
          <div className='repos-item__detail__info'>
            <FaInfo />
          </div>
          <div className='repos-item__detail__utensils'>
            <FaUtensils />
          </div>
        </div>
      </div>
    </>
  )
}

export default RepoItems