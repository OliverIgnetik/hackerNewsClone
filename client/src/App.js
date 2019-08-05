import React, { Component } from 'react'
import Routes from './components/Routes'
import Header from './components/Header'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import glam, { Div } from 'glamorous'

// -----------------COMPONENTS ---------------------------

// app based components
const AppBase = glam(Layout)({
  minHeight: '100vh',
})

const Content = glam(Layout.Content)({
  padding: 50,
})

class App extends Component {
  render() {
    return (
      <AppBase>
        <Header />
        {/* Switch ensures both components do not render */}
        <Content>
          <Div css={{ padding: 20, backgroundColor: 'white', minHeight: 280 }}>
            <Routes/>
          </Div>
        </Content>
      </AppBase>
    )
  }
}

export default App
