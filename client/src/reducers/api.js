import axios from 'axios'

const baseUrl = '/api'

// axios just makes fetching alot easier
// fetchApi ({url:'/posts',data:{}}).then(result=>{})
// fetch({body:JSON.stringfy(...)}).then(res=>res.json()).then()
export const fetchApi = (opts={}) => {
    // JWT token
    const headers = {} 
    const url = `${baseUrl}${opts.url}`
    return axios({...opts,url,headers})
}