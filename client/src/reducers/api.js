import axios from 'axios'
import cookie from 'js-cookie'

const baseUrl = '/api'

// axios just makes fetching alot easier
// fetchApi ({url:'/posts',data:{}}).then(result=>{})
// fetch({body:JSON.stringfy(...)}).then(res=>res.json()).then()
export const fetchApi = opts => {
    // JWT token
    const headers = {} 
    const token = cookie.get('token')
    if (token){
        headers.authorization = `Bearer ${token}`
    }
    const url = `${baseUrl}${opts.url}`
    return axios({...opts,url,headers})
}