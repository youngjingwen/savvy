const routes = {
  childRoutes: [{
    path: '/',
    component: require('./components/App').default,
    indexRoute: require('./pages/Home'),
    childRoutes: [
      require('./pages/Dashboard')
    ]
  }]
}

export default routes
