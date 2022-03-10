const Post = require('../models/Post');
const router = require("express").Router();

// get all posts
router.get("/", (req, res, next) => {
  Post.find()
  .then(posts => {
    res.status(200).json(posts)
  })
});

// create a post
router.post('/new', (req,res, next) => {
  console.log('test')
  const {message} = req.body
  Post.create({message})
  .then(post => {
    res.status(201).json(post)
  })
  .catch(err => next(err))
})

// get a speific post
router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
  .then(post => {
    if (!post) {
      res.status(404).json(post)
    } else {
      res.status(200).json(post)
    }
  })
});

// udate a post
router.put('/:id', (req, res, next) => {
  const {message} = req.body
  Post.findByIdAndUpdate(req.params.id, {
    message
  }, {new: true})
  .then(updatedPost => {
    res.status(200).json(updatedPost)
  })
  .catch(err => next(err)) 
});

// delete a post
router.put('/:id', (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(200).json({message: 'Post deleted'})
  })
  .catch(err => next(err)) 
});



module.exports = router;
