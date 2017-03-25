module.exports = {
  path: 'dashboard',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./NewPost'),
        require('./UpdatePost')
      ])
    })
  },
  getIndexRoute(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, {
        component: require('./components/Posts').default,
      })
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Dashboard').default)
    })
  }
}
