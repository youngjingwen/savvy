const Post = require('../models/post');

exports.getPosts = function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts })
  });
}

exports.getPost = function(req, res) {
  Post.findById({_id:req.params.id}, function(err, post){
    res.json({post: post})
  })
}

exports.deletePost = function(req, res) {
  Post.findById({_id: req.params.id}, function(err, post){
    post.remove(function(err){
      res.json({ message: '文章已经删除了！' });
    })
  })
}

exports.updatePost = function(req, res) {
  Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err){
    if(err) res.status(500).json({error:'更新失败'})
    res.send('更新成功')
  })
}

exports.addPost = function(req, res) {
  let post = new Post(req.body);
  post.save();
  res.json(req.body);
}
