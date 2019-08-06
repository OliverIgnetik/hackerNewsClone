import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import LoginPage from './LoginPage'
import NewPostPage from './NewPostPage'
import PostsPage from './../containers/PostsPage'
const Routes = () => (
  <Switch>
    {/* only match when the path is exactly this */}
    {/* redirect the user to the posts page */}
    <Redirect exact path='/' to='/posts' />
    <Route exact path='/submit' render={() => <NewPostPage />} />
    <Route exact path='/posts' render={props => <PostsPage {...props} />} />
    <Route exact path='/login' render={props => <LoginPage {...props} />} />
  </Switch>
)

export default Routes 