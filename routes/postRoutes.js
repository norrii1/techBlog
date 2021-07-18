const router = require('express').Router( )
const { Post } = require('../models')
const passport = require('passport')

router.get('/posts', passport.authenticate('jwt'),  (req, res) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create(req.body)
.then(post => res.json(post))
.catch(err => console.log(err)))

router.put('/posts/:id', passport.authenticate('jwt'), (req, res) => Post.destroy({
  where: {
    id: req.params.id
  }
})
.then(() => res.sendStatus(200))
.catch(err => console.log(err)))

module.exports = router

