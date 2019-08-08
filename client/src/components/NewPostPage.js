import React from 'react'
import { Div, H3 } from 'glamorous'

import NewPostForm from '../containers/NewPostForm'

const NewPostPage = () => (
  <Div>
    <H3>Add a new post</H3>
    <NewPostForm/>
  </Div>
)

export default NewPostPage
