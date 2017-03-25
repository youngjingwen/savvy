import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const renderApp = appRoutes => {
  render (
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory} routes={appRoutes} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
};

renderApp(routes)

// Hot Module Replacement API
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./routes', () => {
      renderApp(routes)
    })
  }
}
