import App from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'

import routes from './routes'

const data = window._INITIAL_DATA_
const error = window._INITIAL_DATA_ERROR_

hydrate(
  <BrowserRouter>
    <App routes={routes} initialData={data} initialDataError={error} />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
