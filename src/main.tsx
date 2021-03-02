import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'wouter'
import { Homepage } from './modules/home/home'

ReactDOM.render(
  <React.StrictMode>
        <Route path="/" component={Homepage} />
  </React.StrictMode>,
  document.getElementById('root')
)
