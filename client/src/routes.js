const routes = {
  childRoutes: [{
    path: '/',
    component: require('./components/App').default,
    indexRoute: require('./pages/Home'),
    childRoutes: [
      require('./pages/Post')
    ]
  }]
}

export default routes;
