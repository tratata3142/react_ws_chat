import React from 'react'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  )
}

export default App
