const User = require('../models/user');
const jwt = require('jsonwebtoken');
const settings = require('../config/config');

let generateToken = function(user) {
  return jwt.sign(user, settings.secret, {
    expiresIn: 72000
  });
}

exports.signup = function(req, res) {
  let user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.save(function(err) {
    if(err) { return console.log(err); }
    return res.json({
      token: generateToken({email: user.email}),
      user: { email: user.email, admin: user.admin }
    })
  })
}

exports.login = function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if(err) { return console.log(err); }
    if(!user) { return res.status(403).json({error: '用户名不存在！'}) }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if(err) { return console.log(err); }
      if (!isMatch) { return res.status(403).json({error: "密码无效！" }); }
      return res.json({
        token: generateToken({email: user.email}),
        user: { email: user.email, admin: user.admin }
      });
    });
  });
}
