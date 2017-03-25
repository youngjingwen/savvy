module.exports = {
  path: 'posts/new',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./NewPost').default)
    })
  }
}
