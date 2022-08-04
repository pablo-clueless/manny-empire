import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import { ContextProvider } from './contexts/ContextProvider'
import { store } from './store/store'

ReactDOM.render(
  <Router>
    <ContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextProvider>
  </Router>,
  document.getElementById('root')
)
