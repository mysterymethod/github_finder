

//SEARCH USERS
//URL - https://api.github.com/search/users?q=pranoy
export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })

  const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    },
  })

  const { items } = await response.json()
  //console.log(data.items);
  return items
}




//SEARCH SINGLE USER
//url - https://api.github.com/users/pranoy
export const searchUser = async (username) => {

  const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    },
  })

  const data = await response.json()

  return data
}




//GET REPOS OF SELECTED USER
//url - https://api.github.com/users/pranoy/repos
export const getRepos = async (username) => {

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

  return data 
}