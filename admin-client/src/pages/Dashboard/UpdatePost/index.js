module.exports = {
  path: 'posts/:postId/edit',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./UpdatePost').default)
    })
  }
}
