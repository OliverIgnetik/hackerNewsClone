import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import NewPostPage from './NewPostPage'
import PostsPage from './../containers/PostsPage'
const Routes = () => (
  <Switch>
    {/* only match when the path is exactly this */}
    {/* redirect the user to the posts page */}
    <Redirect exact path='/' to='/posts' />
    <Route exact path='/submit' render={() => <NewPostPage />} />
    <Route exact path='/Posts' render={props => <PostsPage {...props} />} />
  </Switch>
)

export default Routes 