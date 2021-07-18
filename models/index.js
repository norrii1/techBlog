const Post = require('./Post')
const User = require('./User')

User.hasMany(Post, {
  foreignKey: 'uid'
})

module.exports = {Post, User}